import React from "react";
import style from "./News.module.css"
import monImage from "/src/assets/images/article-img/verstappen.jpeg"

const News = () => {
    return (
        <div className={style.articleContainer}>
            <img 
                src={monImage}
                className={style.articleImage}    
            />
            <div>
                <h3>New setbacks for RedBull Racing</h3>
                <p className={style.articleText}>Despite an extraordinary finish, Red Bull misses out on first place due to an ERS system failure two laps from the finish</p>
            </div>
        </div>
    )
}

export default News