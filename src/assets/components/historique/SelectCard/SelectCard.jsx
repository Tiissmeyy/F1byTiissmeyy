import React from "react";
import style from "./SelectCard.module.css"

const SelectCard = (props) => {
    return (
        <button 
            className={style.selectCard}
            onClick={props.onclick}
        >
            {props.children}
        </button>
    )
}

export default SelectCard