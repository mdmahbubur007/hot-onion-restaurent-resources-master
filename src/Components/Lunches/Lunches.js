import React from 'react';
import './Lunches.css';
import { Link } from 'react-router-dom';
const Lunches = (props) => {
    //console.log(props)
    const {name, description, Price, img,key} = props.prodct;
    return (
        <div className="launches">
            <img src={img} alt="Image"/>
            <h3><Link to={"/product/"+key}>{name}</Link></h3>
            <h5>{description}</h5>
            <h1>$ {Price}</h1>
        </div>
    );
};

export default Lunches;