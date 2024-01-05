import NavBar from "../components/NavBar.js"
import {Link} from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>Looks like we've encountered a problem.</h1>
                <Link to="/"><button>Return Home</button></Link>
            </main>
        </>
    )
}

export default ErrorPage