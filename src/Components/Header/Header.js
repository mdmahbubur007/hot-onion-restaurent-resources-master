import React from 'react';
import logo from '../../Image/logo.png';
import bannerbackground from '../../Image/bannerbackground.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';



const Header = () => {
  
    return (
        <div className='header'>
            <nav>
                    <div>
                        <img src={logo} alt="logo here."/>
                    </div>
                    <div className="menu">
                        <FontAwesomeIcon icon={faShoppingCart} className="cart"/>
                        <a href="/Login">Log In</a>
                        <a className= "signUp" href="/Sign Up">Sign Up</a>
                    </div>
            </nav>
            <div >
                <img className="background" src={bannerbackground} alt="background here"/>
            </div>
            <div className="category">
                <a href="/breakfast">Breakfast</a>              
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>               
            </div> 
        </div>
    );
};

export default Header;