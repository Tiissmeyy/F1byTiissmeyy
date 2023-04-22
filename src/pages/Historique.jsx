import React, { useEffect, useState, useRef } from "react";
import DateElement from "../assets/components/historique/Date/Date";
import date from "../data/date.json"
import style from "./Historique.module.css"

const Historique = () => {

    
    const dateElements = date.dates.map((el, index)=> {
        return(
            <DateElement key={index} date={el.date} event={el.evenement} />
        )
    })

    return (
        <div className={style.datesContainer}>
            <h1 style={{textAlign:"center"}}>Histoire de la Formule 1</h1>
            {dateElements}
        </div>
    )
}

export default Historique;