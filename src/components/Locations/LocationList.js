import { useEffect, useState } from "react"
import { Location } from "./Location"
import "./locations.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])
    //useEffect to fetch the locations and parse into a usable array
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )
    //returning an article that calls the location module to fill in 
    return <article className="locations">
        {
            locations.map(location => <Location key={`location--${location.id}`} 
                id={location.id} 
                address={location.address} 
                footage={location.footage} />)
        }
    </article>
}