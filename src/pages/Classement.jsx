import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import Button from "../assets/components/generics/Button/Button"
import style from "./Classement.module.css"

const Classement = () => {
    const [piloteRanking, setPiloteRanking] = useState([])
    const [inputValue, setInputValue] = useState(2023)
    const [selectedYear, setSelectedYear] = useState()
    const [currentYear, setCurrentYear] = useState(2023)

    const data = useLoaderData()

    useEffect(()=>{
        setPiloteRanking(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setCurrentYear(data.MRData.StandingsTable.season)
    },[])

    useEffect(()=> {
        console.log(piloteRanking)
    }, [piloteRanking])

    useEffect(() => {
        const getNewYear = async () => {
            const response = await fetch(`http://ergast.com/api/f1/${selectedYear}/driverStandings.json`)
            if(response.ok){
                const body = await response.json();
                setPiloteRanking(body.MRData.StandingsTable.StandingsLists[0].DriverStandings)
                setCurrentYear(body.MRData.StandingsTable.season)
            }                     
        }
        getNewYear()
    }, [selectedYear])

    const handleClick = () => {
        setSelectedYear(inputValue)
    }

    const piloteArray = piloteRanking && piloteRanking.map((el, index) => {

        return (
            <>
                <tr key={el.id} className={style.bodyTableLine}>
                    <td>{el.positionText}</td>
                    <td>{el.Driver.givenName} {el.Driver.familyName}</td>
                    <td>{el.Constructors[0].name}</td>
                    <td>{el.points}</td>
                    <td>{el.wins}</td>
                </tr>
            </>
            
        )
    })

    return (
        <>
            <h1 className={style.classementTitle}>Classement saison {currentYear}</h1>
            <section>
                <table className={style.table}>
                    <thead>
                        <tr className={style.headTableLine}>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Ecurie</th>
                            <th>Points</th>
                            <th>Victoires</th>
                        </tr>
                    </thead>
                    <tbody>
                        {piloteArray}
                    </tbody>
                </table>
            </section>
            <div className={style.selectorContainer}>
                <label htmlFor="input">Select Year : </label>
                <input id="input" type="number" value={inputValue} min={1950} max={2023} onChange={v => setInputValue(v.target.value)} />
                <Button onclick={handleClick}>
                    <p>Valider</p>
                </Button>
            </div>
        </>
    )
}

export default Classement