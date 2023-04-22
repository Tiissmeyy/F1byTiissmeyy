import React from "react";
import style from "./Button.module.css"

const Button = (props) => {
    return (
        <button className={style.button} onClick={props.onclick}>
            {props.children}
        </button>
    )
    
}

export default Button