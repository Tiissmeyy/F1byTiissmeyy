import React, { useEffect, useState } from "react";
import moment from "moment";
import style from "./NextRace.module.css";
import Corner from "../Corner/Corner";
import DateDisplay from "../DateDisplay/DateDisplay";

const NextRace = () => {
  const [nextRaceInfos, setNextRaceInfos] = useState({});
  const [timeBeforeRace, setTimeBeforeRace] = useState(0);

  useEffect(() => {
    const getInfos = async () => {
      try {
        const response = await fetch(
          "https://ergast.com/api/f1/current/next.json"
        ).then((res) => res.json());
        setNextRaceInfos(response.MRData.RaceTable.Races[0]);
      } catch (e) {
        console.log(`erreur dans le chargement de la prochaine course : ${e}`);
      }
    };
    getInfos();
  }, []);

  useEffect(() => {
    if (!nextRaceInfos.date || !nextRaceInfos.time) return; // Si les informations de la prochaine course ne sont pas encore disponibles, ne rien faire

    const intervalId = setInterval(() => {
      const nextRaceTimestamp = convertToTimestamp(
        nextRaceInfos.date,
        nextRaceInfos.time
      );
      setTimeBeforeRace(nextRaceTimestamp - Date.now());
    }, 1000);

    return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
  }, [nextRaceInfos]);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    return `${padTo2Digits(days)} jours ${padTo2Digits(
      hours
    )} heures ${padTo2Digits(minutes)} minutes ${padTo2Digits(seconds)} secondes`;
  }

  function convertToTimestamp(dateStr, timeStr) {
    // Convertir la date en objet Date
    const [year, month, day] = dateStr.split("-");
    timeStr = timeStr.slice(0,timeStr.length-1)
    const [hours, minutes, seconds] = timeStr.split(":");
    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    // Retourner le timestamp en millisecondes
    return parseInt(date.getTime());
  }


    return (
        <section className={`${style.nextRaceBorder}`}>
            <Corner />
            <div className={`${style.nextRaceContainer}`}>
                <div className={`${style.nextRace}`}>
                    <h2 className={`${style.nextRaceTitle}`}>Next race : {nextRaceInfos.raceName}</h2>
                    {/* <h3>Circuit : {nextRaceInfos.Circuit.circuitName}</h3> */}
                    <div className={`${style.inlineDate}`}>
                        <h3>Date : {moment(nextRaceInfos.date).format("DD[th] MMMM YYYY")}</h3>
                        {/* <DateDisplay timestamp={1682852400000} />  */}
                    </div>
                </div>
                <p className={`${style.nextRaceTimeBeforeRace}`}>Start of the race in : <br/> {convertMsToTime(timeBeforeRace)}</p>
            </div>
            <Corner />
        </section>
    )
}

export default NextRace