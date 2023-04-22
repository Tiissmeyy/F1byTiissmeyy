import React from "react";
import style from "./MenuBurger.module.css"

const MenuBurger = (props) => {
    return (
        <div className={style.burgerContainer}>
            <i class="fa-solid fa-bars"></i>
        </div>
    )
}

export default MenuBurger