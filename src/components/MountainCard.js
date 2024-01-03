import {Link} from 'react-router-dom'
function MountainCard({mountain}) {
    return (
        <article>
            <h2>{mountain.name}</h2>
            {<Link to={`/mountain/${mountain.id}`}>More Information</Link>}
        </article>
    )
}

export default MountainCard