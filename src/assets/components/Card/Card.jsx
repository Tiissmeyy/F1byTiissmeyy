import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.css"

const Card = (props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(props.target)
    }

    return (
        <div className={`${style.card}`} onClick={handleClick}>
            <img className={`${style.image}`} src={`${props.image}`}/>
            <h4 className={style.text}>{props.name}</h4>
        </div>
    )
}

export default Card