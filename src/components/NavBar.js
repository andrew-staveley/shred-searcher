import {NavLink } from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <h1 className="titlenavbar">Shred Searcher - The Best Place to Explore Mountains</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/maine">Maine</NavLink>
            <NavLink to="/newhampshire">New Hampshire</NavLink>
            <NavLink to="/vermont">Vermont</NavLink>
        </nav>
    )
}

export default NavBar