import React from "react";

const classementLoader = async () => {
    const response = await fetch("http://ergast.com/api/f1/2023/driverStandings.json")
    try {
        if(response.ok){
            return body
        }  
    } catch(e) {
        console.log(`Erreur dans le chargement du classement pilote : ${e}`)
    }
    
}

export default classementLoader