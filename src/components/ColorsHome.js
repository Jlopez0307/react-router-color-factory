import React from "react";
import {Link, NavLink} from 'react-router-dom'
import '../styles/ColorsHome.css'
const ColorsHome = () => {
    return (
        <div className="ColorsHome">
            <h1>Welcome to the color factory</h1>
            <NavLink to="/colors/new">Add a color</NavLink>
        </div>
    )
};

export default ColorsHome;