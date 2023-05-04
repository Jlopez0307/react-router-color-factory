import React from "react";
import {Link} from 'react-router-dom';
import "../styles/ColorList.css"
// const defaultColors = ["red", "yellow", "green"]

const ColorList = ({name, id}) => {
    console.log(name)
    return (
        <div className="ColorList">
            <ul>
                    <li>
                        <Link to={`/colors/${name}`}>{name}</Link>
                    </li>
            </ul>
        </div>
    )
};


export default ColorList;