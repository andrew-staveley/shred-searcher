import NavBar from "../components/NavBar.js"
import {useState, useEffect} from "react"
import MountainCard from "../components/MountainCard.js"

function NewHampshire() {
    const [mountains, setMountains] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:4000/mountains")
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
                <h1>New Hampshire</h1>
                {newHampshireMountains.map((mountain) => <MountainCard key={mountain.id} mountain={mountain} />)}
            </main>
        </>
    )
}

export default NewHampshire