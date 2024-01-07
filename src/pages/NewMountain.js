import NavBar from "../components/NavBar.js"
import {useState} from "react"
import "../css/NewMountain.css"
function NewMountain() {
    const [name, setName] = useState("")
    const [maplink, setMapLink] = useState("")
    const [location, setLocation] = useState("")
    const [state, setState] = useState("Maine")
    const [nightski, setNightski] = useState("No")
    const [area, setArea] = useState("")
    const [elevation, setElevation] = useState("")
    const [trails, setTrails] = useState("")
    const [link, setLink] = useState("")

    function nameHandler(e) {
        setName(e.target.value)
    }

    function mapHandler(e) {
        setMapLink(e.target.value)
    }

    function locationHandler(e) {
        setLocation(e.target.value)
    }

    function stateHandler(e) {
        setState(e.target.value)
    }

    function nightskiHandler(e) {
        setNightski(e.target.value)
    }

    function areaHandler(e) {
        setArea(e.target.value)
    }

    function elevationHandler(e) {
        setElevation(e.target.value)
    }

    function trailHandler(e) {
        setTrails(e.target.value)
    }

    function linkHandler(e) {
        setLink(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        const configObject = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                maplink: maplink,
                location: location,
                state: state,
                nightski: nightski,
                area: area,
                elevation: elevation,
                trails: trails,
                link: link
            })
        }
        fetch("http://localhost:4000/mountains", configObject)
        .then(res => res.json())
        .then(data => alert(`${data.name} has been added!`))
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div id="upperText">
                    <h1>Add a New Mountain</h1>
                    <p>Is there a mountain that I've missed?</p>
                    <p>Fill out the form below to add a mountain</p>
                </div>
                <div id="newMountainForm">
                    <form id="newMountainForm">
                        <div className="input">
                            <label for="name">Mountain Name:</label>
                            <input type="text" name="name" onChange={nameHandler}></input>
                        </div>
                        <div className="input">
                            <label for="maplink">Link to Trailmap Image:</label>
                            <input type="text" name="maplink" onChange={mapHandler}></input>
                        </div>
                        <div className="input">
                            <label for="location">Mountain Location:</label>
                            <input type="text" name="location" onChange={locationHandler}></input>
                        </div>
                        <div className="input">
                            <label for="state">State:</label>
                            <select name="state" onChange={stateHandler}>
                                <option value="Maine">Maine</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="Vermont">Vermont</option>
                            </select>
                        </div>
                        <div className="input">
                            <label for="nightski">Nightskiing?</label>
                            <select name="nightski" onChange={nightskiHandler}>
                                <option value="No">No</option>
                                <option value="Partial">Partial</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="input">
                            <label for="area">Area in Acres</label>
                            <input type="text" name="area" onChange={areaHandler}></input>
                        </div>
                        <div className="input">
                            <label for='elevation'>Elevation in Feet</label>
                            <input type="text" name="elevation" onChange={elevationHandler}></input>
                        </div>
                        <div className="input">
                            <label for="trails">Trails</label>
                            <input type="text" name="trails" onChange={trailHandler}></input>
                        </div>
                        <div className="input">
                            <label for="resortlink">Resort Link:</label>
                            <input type="text" name="resortlink" onChange={linkHandler}></input>
                        </div>
                        <div id="submitButton">
                            <button onClick={submitHandler}>Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default NewMountain