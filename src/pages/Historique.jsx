import React, { useEffect, useState, useRef } from "react";
import DateElement from "../assets/components/historique/Date/Date";
import date from "../data/date.json"
import style from "./Historique.module.css"

const Historique = () => {
    const [currentPosition, setCurrentPosition] = useState(window.scrollY);
    const dateRefs = useRef([]);

    useEffect(() => {
        function handleScroll() {
          setCurrentPosition(window.scrollY);
          console.log('Défilement détecté !');
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    const dateElements = date.dates.map((el, index)=> {
        return(
            <DateElement ref={ref => dateRefs.current[index] = ref} key={index} date={el.date} event={el.evenement} currentPosition={currentPosition} />
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