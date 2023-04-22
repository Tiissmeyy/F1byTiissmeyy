import React from "react";
import style from "./News.module.css"

const News = () => {
    return (
        <div className={style.articleContainer}>
            <img 
                src="../images/article-img/verstappen.jpeg" 
                className={style.articleImage}    
            />
            <div>
                <h3>Nouveau coups dur pour RedBull Racing</h3>
                <p className={style.articleText}>Malgré un fin de course extraordinaire, Red Bull manque la première place en raison d'une panne du système ERS à deux tours de l'arrivée</p>
            </div>
        </div>
    )
}

export default News