import React,{useState} from 'react';
import './Breakfasts.css'

const Breakfasts = (props) => {
    
    const {name, Price, description, img} = props.prod;
    return (
        <div className="breakfasts">
            <img src={img} alt="Image"/>
            <h3>{name}</h3>
            <h5>{description}</h5>
            <h1>$ {Price}</h1>
        </div>
    );
};

export default Breakfasts;