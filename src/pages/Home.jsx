import React from "react";
import News from "../assets/components/News/News";
import Card from "../assets/components/Card/Card";
import RowActu from "../assets/components/RowActu/RowActu";
import style from "./Home.module.css"
import NextRace from "../assets/components/NextRace/NextRace";
import historyImg from "/src/assets/images/1950f1.jpg";
import rankingImg from "/src/assets/images/classement.jpg";
import circuitsImg from "/src/assets/images/circuit.jpg"

const Home = () => {
    
    return (
        <>
            <h1 className={`${style.homeTitle}`}>Welcome to the number 1 site on F1</h1>
            {/* Bandeau d'actualité */}
            <RowActu
                width="100%"  
                title="Latest News"
                background="white"
                padding="20px 0px"
            >
                <News />
                <News />
                <News />
                <News />
            </RowActu>
            {/* Bandeau de navigation */}
            <div className={style.cardsContainer}>
                <Card 
                    name="Ranking"
                    target="/app/classement"
                    image={rankingImg}
                />
                <Card 
                    name="Circuits"
                    target="/"
                    image={circuitsImg}
                />
                <Card 
                    name="Historical"
                    target="/app/historique"
                    image={historyImg}
                />    
            </div>
            <NextRace />
            
            
        </>
    )
}

export default Home