import {Link} from 'react-router-dom'
import "../css/MountainCard.css"

function MountainCard({mountain}) {
    return (
        <article className="mountain">
            <h2>{mountain.name}</h2>
            {<Link to={`/mountain/${mountain.id}`}>Explore {mountain.name}</Link>}
        </article>
    )
}

export default MountainCard