import React, { forwardRef, useState } from "react";
import style from "./Date.module.css"

const DateElement = forwardRef((props, ref) => {

    return (
        <div key={crypto.randomUUID} className={style.dateContainer} >
            <p className={style.date}>{props.date}</p>
            <p className={style.event}>{props.event}</p>
        </div>
    )
});

export default DateElement
