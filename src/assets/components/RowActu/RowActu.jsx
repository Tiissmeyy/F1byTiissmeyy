import React from "react"
import style from "./RowActu.module.css"

const RowActu = (props) => {
    const height = {
        height: props.height ? `${props.height}` : "auto",
        width: props.width ? `${props.width}`: "auto",
        padding: props.padding ? `${props.padding}` : "",
        background: props.background ? `${props.background}`: "white",
        marginBottom: props.marginBottom ? `${props.marginBottom}` : "70px", 
        color: "#333"
    }

    return (
        <div className={`${style.genericRow}`} style={height}>
            {props.title && <h2 className={`${style.rowTitle}`}>{props.title}</h2>}
            {props.children && <div className={style.rowArticles}>
                {props.children}
            </div>}
        </div>
    )
}

export default RowActu