import React from "react";
import {Link, useParams} from 'react-router-dom'
import "../styles/ColorDetails.css"


const ColorDetails = () => {
    const { color } = useParams();
    console.log(color)
    
    return (
        <div className="ColorDetails" style={{backgroundColor: color}}>
            <p>THIS IS {color.toUpperCase()} ISNT IT BEAUTIFUL</p>
            <Link to="/colors">GO BACK</Link>
            
        </div>
    )
    
};

export default ColorDetails;