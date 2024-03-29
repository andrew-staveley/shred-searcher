import NavBar from "../components/NavBar.js"
import {useState, useEffect} from "react"
import MountainCard from "../components/MountainCard.js"
import "../css/StatePage.css"

function Maine() {
    const [mountains, setMountains] = useState([])
    
    useEffect(() => {
        fetch("https://shred-searcher-backend.onrender.com/mountains")
        .then ((r) => r.json())
        .then((data) => setMountains(data))
    }, [])

    let maineMountains = mountains.filter((mountain) => mountain.state === "Maine")

    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1 className="statename">Maine</h1>
                <div className="mountaincard">
                    {maineMountains.map((mountain) => <MountainCard key={mountain.id} mountain={mountain}/>)}
                </div>
            </main>
        </>
    )
}

export default Maine