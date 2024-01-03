import NavBar from "../components/NavBar.js"
import "../css/Home.css"

function Home() {
    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>Welcome to Shred Searcher</h1>
                <h2>This is where you can find your next adventure</h2>
                <h3>Currently only availible for mountains in New England</h3>
            </main>
        </>
    )
}

export default Home