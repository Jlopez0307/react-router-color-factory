import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "../styles/ColorForm.css"


const ColorForm = ({ add }) => {
    const INITIAL_STATE = {
        name: ''
    }

    const history = useHistory()
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
           
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        add({...formData})
        setFormData(INITIAL_STATE)
        history.push('/colors')
        
    }

    return (
        <div className="ColorForm">
            
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Color Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Color Name"
                        value={formData.name} 
                        onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="color">Choose a color: </label>
                    <input type="color"/>        
                </div>
            

                <button> Add Color! </button>
            </form>
        </div>
    )
};

export default ColorForm;