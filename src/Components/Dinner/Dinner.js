import React from 'react';
import './Dinner.css';
import { Link } from 'react-router-dom';


const Dinner = (props) => {
    //console.log(props.product)
    const {name, Price, description, img, key} = props.product;
    return (
        <div className="dinner">
            <img src={img} alt="Image"/>
            <h3><Link to={"/product/"+key}>{name}</Link></h3>
            <h5>{description}</h5>
            <h1>$ {Price}</h1>
          
        </div>
              
    );
};

export default Dinner;