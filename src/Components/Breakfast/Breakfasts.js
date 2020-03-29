import React,{useState} from 'react';
import './Breakfasts.css'
import { Link } from 'react-router-dom';

const Breakfasts = (props) => {
    console.log(props.prod.key)
    const {name, Price, description, img, key} = props.prod;
    return (
        <div className="breakfasts">
            <img src={img} alt="Image"/>
            <h3><Link to={"/product/"+key}>{name}</Link></h3>
            <h5>{description}</h5>
            <h1>$ {Price}</h1>
        </div>
    );
};

export default Breakfasts;