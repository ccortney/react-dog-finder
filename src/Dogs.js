import { Link } from "react-router-dom"

const Dogs = ({dogs}) => {
    return (
        <div>
            <h1>Dog List</h1>
            {dogs.map((dog) => (
            <Link to={dog.name} key={dog.name}><img src = {dog.src} alt={dog.name} /></Link>
            ))}
        </div>
    )
}

export default Dogs;