import NavBar from "../components/NavBar.js"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import "../css/Mountain.css"

function Mountain() {
    const [mountain, setMountain] = useState([])
    const params = useParams()
    const mountainID = params.id
    useEffect(() => {
        fetch(`http://localhost:4000/mountains/${mountainID}`)
        .then((r) => r.json())
        .then((data) => setMountain(data))
    }, [mountainID])
    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>{mountain.name}</h1>
                <p>{mountain.location}, {mountain.state}</p>
                <img alt='mountain trail map' src={mountain.maplink} />
                <div className="moreinfo">
                    <h2>More Information</h2>
                    <ul>
                        <li>Nightskiing? {mountain.nightski}</li>
                        <li>Shredable Area: {mountain.area}</li>
                        <li>Summit Elevation: {mountain.elevation}</li>
                        <li>Number of Runs: {mountain.trails}</li>
                    </ul>
                </div>
                <div className="buttons">
                    <button id="haveskiied">I've Shredded This Mountain</button>
                    <button id="wannaski">I Wanna Shred This Mountain</button>
                    <button id="resortpage">Visit {mountain.name}</button>
                </div>
            </main>
        </>
    )
}

export default Mountain