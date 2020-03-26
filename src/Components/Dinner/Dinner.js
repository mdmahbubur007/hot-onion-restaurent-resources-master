import React from 'react';
import './Dinner.css';


const Dinner = (props) => {
    //console.log(props.product)
    const {name, Price, description, img} = props.product;
    return (
        <div className="dinner">
            <img src={img} alt="Image"/>
            <h3>{name}</h3>
            <h5>{description}</h5>
            <h1>$ {Price}</h1>
          
        </div>
              
    );
};

export default Dinner;