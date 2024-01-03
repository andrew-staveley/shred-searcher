import NavBar from "../components/NavBar.js"
import {useState, useEffect} from "react"
import MountainCard from "../components/MountainCard.js"
import "../css/StatePage.css"

function Vermont() {
    const [mountains, setMountains] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:4000/mountains")
        .then ((r) => r.json())
        .then((data) => setMountains(data))
    }, [])

    let vermontMountains = mountains.filter((mountain) => mountain.state === "Vermont")

    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1 className="statename">Vermont</h1>
                {vermontMountains.map((mountain) => <MountainCard key={mountain.id} mountain={mountain} />)}
            </main>
        </>
    )
}

export default Vermont