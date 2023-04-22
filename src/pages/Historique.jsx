import React, { useEffect, useState, useRef } from "react";
import DateElement from "../assets/components/historique/Date/Date";
import date from "../data/date.json"
import style from "./Historique.module.css"

const Historique = () => {

    
    const dateElements = date.dates.map((el, index)=> {
        return(
            <DateElement key={index} date={el.date} event={el.event} />
        )
    })

    return (
        <div className={style.datesContainer}>
            <h1 style={{textAlign:"center"}}>Formula 1 history</h1>
            {dateElements}
        </div>
    )
}

export default Historique;