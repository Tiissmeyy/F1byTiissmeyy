import React, { useEffect, useState } from "react";
import style from "./InfosContainer.module.css"

const InfosContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const getYearData = async () => {
            const response = await fetch("https://ergast.com/api/f1/2015.json")
            if(response.ok){
                const body = await response.json()
                setData(body.MRData.RaceTable.Races)
            }
        }
        getYearData()
    }, [])

    useEffect(()=> {
        console.log(data)
    },[data])

    return (
        <div 
            className={style.infosContainer}
        >
            <p onClick={props.onclick}  >infosContainer</p>
        </div>
    )
}

export default InfosContainer