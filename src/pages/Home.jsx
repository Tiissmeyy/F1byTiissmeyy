import React from "react";
import News from "../assets/components/News/News";
import Card from "../assets/components/Card/Card";
import RowActu from "../assets/components/RowActu/RowActu";
import style from "./Home.module.css"
import NextRace from "../assets/components/NextRace/NextRace";

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
                    image="/images/classement.jpg"
                />
                <Card 
                    name="Circuits"
                    target="/"
                    image="/images/circuit.jpg"
                />
                <Card 
                    name="Historique"
                    target="/app/historique"
                    image="/images/1950f1.jpg"
                />    
            </div>
            <NextRace />
            
            
        </>
    )
}

export default Home