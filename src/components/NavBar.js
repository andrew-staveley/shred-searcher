import {NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/maine">Maine</NavLink>
            <NavLink to="/newhampshire">New Hampshire</NavLink>
            <NavLink to="/vermont">Vermont</NavLink>
        </nav>
    )
}

export default NavBar