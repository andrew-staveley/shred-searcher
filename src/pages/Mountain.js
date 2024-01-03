import NavBar from "../components/NavBar.js"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function Mountain() {
    const [mountain, setMountain] = useState([])
    const params = useParams()
    const mountainID = params.id
    useEffect(() => {
        fetch(`http://localhost:4000/mountains/${mountainID}`)
        .then((r) => r.json())
        .then((data) => setMountain(data))
    })
    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>{mountain.name}</h1>
                <p>{mountain.location}, {mountain.state}</p>
                <img alt='mountain trail map' src={mountain.maplink} />
                <h2>More Information</h2>
                <ul>
                    <li>Nightskiing?: {mountain.nightski}</li>
                    <li>Ski-able Area: {mountain.area}</li>
                    <li>Summit Elevation: {mountain.elevation}</li>
                    <li>Number of Runs: {mountain.trails}</li>
                </ul>
                <a href={mountain.link}>Wanna Ski {mountain.name}? Click Here!</a>
            </main>
        </>
    )
}

export default Mountain