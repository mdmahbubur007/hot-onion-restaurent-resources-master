import React from 'react';
import './Lunches.css';

const Lunches = (props) => {
    //console.log(props)
    const {name, description, Price, img} = props.prodct;
    return (
        <div className="launches">
            <img src={img} alt="Image"/>
            <h3>{name}</h3>
            <h5>{description}</h5>
            <h1>$ {Price}</h1>
        </div>
    );
};

export default Lunches;