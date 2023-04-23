import React, { useEffect, useState } from "react";
import style from "./InfosContainer.module.css"

const InfosContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const getYearData = async () => {
            const response = await fetch(`https://ergast.com/api/f1/${props.year}.json`)
            if(response.ok){
                const body = await response.json()
                setData(body.MRData.RaceTable.Races)
            }
        }
        getYearData()
    }, [])

    let racesList
    if(data.length>0){
        racesList = data.map(el => {
            return (
                <div className={style.raceElement}>
                    <p>{el.round}</p>
                    <p>{el.raceName}</p>
                </div>
            )
        })
    }

    return (
        <div 
            className={style.infosContainer}
        >
            <p onClick={props.onclick}>{props.year} season results</p>
            {racesList}
        </div>
    )
}

export default InfosContainer