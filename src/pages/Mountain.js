import NavBar from "../components/NavBar.js"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {setItems} from "../components/ShredWishList.js"
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

    function resortPageHandler(e) {
        e.preventDefault()
        window.open(mountain.link)
    }

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
                    <p>Nightskiing? {mountain.nightski}</p>
                    <p>Shredable Area: {mountain.area}</p>
                    <p>Summit Elevation: {mountain.elevation}</p>
                    <p>Number of Runs: {mountain.trails}</p>
                </div>
                <div className="buttons">
                    <button id="resortpage" onClick={resortPageHandler}>Visit {mountain.name}</button>
                </div>
            </main>
        </>
    )
}

export default Mountain