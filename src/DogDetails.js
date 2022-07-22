import {useParams, Link, Navigate} from "react-router-dom"

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    const dog = dogs.find(dog => dog.name === name)

    if (dog) {
        return (
            <div>
                
                <img src={dog.src} alt={dog.name}/>
                <h1>{dog.name}</h1>
    
                <h3>Age: {dog.age}</h3>
                {dog.facts.map(fact => <p key={fact}>{fact}</p>)}
                <Link to="/dogs"><p>Go Back</p></Link>
            </div>
        )
    } else {
        return <Navigate to="/dogs"/>
    }

}

export default DogDetails;