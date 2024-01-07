import NavBar from "../components/NavBar.js"
import {Link} from "react-router-dom"
import "../css/Home.css"

function Home() {
    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <div id="top">
                    <h1>Welcome to Shred Searcher</h1>
                    <p>This is your one stop shop to find a New England area mountain</p>
                    <p>Explore the mountains and find some that you've been too, or would like to go too!</p>
                </div>
                <div id="mountainbuttons">
                    <Link to="/maine"><button className="statebutton">Maine</button></Link>
                    <Link to="/newhampshire"><button className="statebutton">New Hampshire</button></Link>
                    <Link to="/vermont"><button className="statebutton">Vermont</button></Link>
                </div>
                <div id="bottom">
                    
                </div>
            </main>
        </>
    )
}

export default Home