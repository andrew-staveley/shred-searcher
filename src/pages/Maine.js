import NavBar from "../components/NavBar.js"
import {useState, useEffect} from "react"
import MountainCard from "../components/MountainCard.js"

function Maine() {
    const [mountains, setMountains] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/mountains")
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
                {maineMountains.map((mountain) => <MountainCard key={mountain.id} mountain={mountain}/>)}
            </main>
        </>
    )
}

export default Maine