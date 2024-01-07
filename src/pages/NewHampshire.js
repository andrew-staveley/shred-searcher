import NavBar from "../components/NavBar.js"
import {useState, useEffect} from "react"
import MountainCard from "../components/MountainCard.js"
import "../css/StatePage.css"

function NewHampshire() {
    const [mountains, setMountains] = useState([])
    
    useEffect(() => {
        fetch("https://shred-searcher-backend.onrender.com/mountains")
        .then ((r) => r.json())
        .then((data) => setMountains(data))
    }, [])

    let newHampshireMountains = mountains.filter((mountain) => mountain.state === "New Hampshire")

    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1 className="statename">New Hampshire</h1>
                <div className="mountaincard">
                    {newHampshireMountains.map((mountain) => <MountainCard key={mountain.id} mountain={mountain} />)}
                </div>
            </main>
        </>
    )
}

export default NewHampshire