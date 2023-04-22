import React, { forwardRef, useState } from "react";
import style from "./Date.module.css"

const DateElement = forwardRef((props, ref) => {
    const [isShown, setIsShown] = useState(true)
    if(ref.current && ref.current.getBoundingClientRect().top - 100 < props.currentPosition + window.innerHeight){
        setIsShown(true)
    }

    return (
        <div ref={ref} key={crypto.randomUUID} className={style.dateContainer} style={isShown ? {opacity: 1} : {opacity: 0}}>
            <p className={style.date}>{props.date}</p>
            <p className={style.event}>{props.event}</p>
        </div>
    )
});

export default DateElement
