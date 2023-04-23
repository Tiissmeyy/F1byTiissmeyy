import React, { useEffect, useState, useRef } from "react";
import DateElement from "../assets/components/historique/Date/Date";
import InfosContainer from "../assets/components/historique/InfosContainer/InfosContainer";
import SelectCard from "../assets/components/historique/SelectCard/SelectCard";
import date from "../data/date.json"
import style from "./Historique.module.css"

const Historique = () => {
    const [selectedCard, setSelectedCard] = useState("")
    const [dateIsSelected, setDateIsSelected] = useState(false)
    const [selectedYear, setSelectedYear] = useState(2023)    

    const toggleDateIsSelected = (e) => {
        if(e){
            setSelectedYear(e.target.value)
        }
        setDateIsSelected(prevState => !prevState)
    }

    const handleClick = (cardName) => {
        if(dateIsSelected){
            setDateIsSelected(false)
        }
        setSelectedCard(cardName)
    }
    
    const dateElements = date.dates.map((el, index)=> {
        return(
            <DateElement key={index} date={el.date} event={el.event} />
        )
    })

    const yearList = []
    for(let i = 1950; i <= 2023; i++){
        yearList.push(<button 
                className={style.dateButton}
                onClick={(e) => toggleDateIsSelected(e)}
                value={i}
            >{i}</button>)
    }

    return (
        <div className={style.datesContainer}>
            <h1 style={{textAlign:"center", marginBottom:"20px"}}>Formula 1 history</h1>
            <div className={style.cardsContainer}>
                <SelectCard onclick={() => handleClick("season")}>
                    <p>Seasons</p>
                </SelectCard>
                <SelectCard onclick={() => handleClick("history")}>
                    <p>F1 history</p>
                </SelectCard>
            </div>
            {selectedCard === "history" && !dateIsSelected && <div className={style.historyContainer}>{dateElements}</div>}
            {selectedCard === "season" && !dateIsSelected && <div className={style.container}><div className={style.seasonContainer}>{yearList}</div></div>}
            {selectedCard === "season" && dateIsSelected && <InfosContainer onclick={toggleDateIsSelected} year={selectedYear} />}
        </div>
    )
}

export default Historique;