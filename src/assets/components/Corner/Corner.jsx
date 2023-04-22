import React, { useEffect, useState } from "react";
import style from "./Corner.module.css"

const Corner = () => {
    const [screenWidth, setScreenWidth] = useState(2000);
    const [divNumber, setDivNumber] = useState(0);
    const [divsArray,setDivsArray] = useState([]);

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        setDivNumber(Math.ceil(screenWidth/20))
        const tmpArray = [];
        for(let i=0; i<divNumber; i++){
            tmpArray.push(i)
        }
        setDivsArray(tmpArray)
    }, [screenWidth])

    window.onresize = () => {
        setScreenWidth(window.innerWidth)
    }


    const divs = divsArray.map((i)=>{
        return (
           <div key={i} className={i%2==0 ? `${style.whiteDiv}` : `${style.redDiv}`}/> 
        )
    })

    return (
        <div className={style.corner}>
            {divs}
        </div>
    )
}
export default Corner