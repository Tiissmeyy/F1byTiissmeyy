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
            <h1 className={`${style.homeTitle}`}>Bienvenue sur le site numéro 1 sur la F1</h1>
            {/* Bandeau d'actualité */}
            <RowActu
                width="100%"  
                title="Dernière actualité"
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
                    name="Classement"
                    target="/app/classement"
                    image={rankingImg}
                />
                <Card 
                    name="Circuits"
                    target="/"
                    image={circuitsImg}
                />
                <Card 
                    name="Historique"
                    target="/app/historique"
                    image={historyImg}
                />    
            </div>
            <NextRace />
            
            
        </>
    )
}

export default Home