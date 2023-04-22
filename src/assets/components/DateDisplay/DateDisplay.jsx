import React from "react";
import moment from "moment";
import "moment/locale/fr";
import style from "./DateDisplay.module.css"

const DateDisplay = ({ timestamp }) => {
  moment.locale("fr");
  const days = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  const jour = days[moment(timestamp).format("d")];
  let jourM = moment(timestamp).format("D");
  if(jourM == 1){
    jourM = "1er"
  }
  const mois = month[moment(timestamp).format("M") - 1];
  const annee = moment(timestamp).format("YYYY")
  
  const date = jour + " "+ jourM +" " + mois+ " " + annee
  return <h3 className={style.date}>{date}</h3>;
}

export default DateDisplay;