import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import Button from "../assets/components/generics/Button/Button"
import style from "./Classement.module.css"

const Classement = () => {
    const [piloteRanking, setPiloteRanking] = useState([])
    const [constructorRanking, setConstructorRanking] = useState([])
    const [inputValue, setInputValue] = useState(2023)
    const [selectedYear, setSelectedYear] = useState()
    const [currentYear, setCurrentYear] = useState(2023)
    const [toggleButton, setToggleButton] = useState(true)

    const data = useLoaderData()

    useEffect(()=>{
        setPiloteRanking(data.driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setCurrentYear(data.driverStandings.MRData.StandingsTable.season)
    },[])

    useEffect(() => {
            const getNewYear = async () => {
            try {
                let driverStandingsResponse
                let constructorStandingsResponse
                if(selectedYear){
                    [driverStandingsResponse, constructorStandingsResponse] = await Promise.all([
                        fetch(`https://ergast.com/api/f1/${selectedYear}/driverStandings.json`),
                        fetch(`https://ergast.com/api/f1/${selectedYear}/constructorStandings.json`)
                    ]); 
                }
               
            
                if(selectedYear && driverStandingsResponse.ok && constructorStandingsResponse.ok){
                    const driverStandings = await driverStandingsResponse.json();
                    const constructorStandings = await constructorStandingsResponse.json();
                    setCurrentYear(selectedYear)
                    setPiloteRanking(driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings)
                    setConstructorRanking(constructorStandings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
                } else {
                    console.log("bad")
                }     
            } catch(e) {
                throw new Error(e)
            }
                                
        }
        getNewYear()
    }, [selectedYear])

    const handleClick = () => {
        setSelectedYear(inputValue)
    }

    const toggleBtn = (arg) => {
        setSelectedYear(inputValue)
        setToggleButton(arg)
    }

    const piloteArray = piloteRanking && piloteRanking.map((el,index) => {
        return (
            <React.Fragment key={index*100}>
                <tr  className={style.bodyTableLine}>
                    <td>{el.positionText}</td>
                    <td>{el.Driver.givenName} {el.Driver.familyName}</td>
                    <td>{el.Constructors[0].name}</td>
                    <td>{el.points}</td>
                    <td>{el.wins}</td>
                </tr>
            </React.Fragment>
            
        )
    })

    const constructorArray = constructorRanking && constructorRanking.map((el,index) => {
        return (
            <React.Fragment key={index}>
                <tr  className={style.bodyTableLine}>
                    <td>{el.positionText}</td>
                    <td>{el.Constructor.name}</td>
                    <td>{el.points}</td>
                    <td>{el.wins}</td>
                </tr>
            </React.Fragment>
            
        )
    })

    return (
        <>
            <h1 className={style.classementTitle}>Ranking season {currentYear}</h1>
            <div className={style.buttonContainer}>
                <button 
                    className={toggleButton ? style.activeButton : style.unactiveButton}
                    onClick={() => toggleBtn(true)}
                >
                    Pilote
                </button>
                <button 
                    className={toggleButton ? style.unactiveButton : style.activeButton}
                    onClick={() => toggleBtn(false)}
                >
                    Constructor
                </button>
            </div>
            <section style={toggleButton ? {display: "block"} : {display: "none"}}>
                <table className={style.table}>
                    <thead>
                        <tr className={style.headTableLine}>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Team</th>
                            <th>Points</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {piloteArray}
                    </tbody>
                </table>
            </section>
            <section style={toggleButton ? {display: "none"} : {display: "block"}}>
                <table className={style.table}>
                    <thead>
                        <tr className={style.headTableLine}>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Points</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {constructorArray}
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