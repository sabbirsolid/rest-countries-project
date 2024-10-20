import { useState } from 'react';
import './Country.css'
export default function Country({country}) {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className ={`country ${visited? 'visited': 'non-visited'}`}>
            <h3>Common Name: {name?.common}</h3>
            <h3>Official Name: {name?.official}</h3>
            <img src={country.flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {visited ?'I have visited this country':'I want to visit this'}
        </div>
    );
};
