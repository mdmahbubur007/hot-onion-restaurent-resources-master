import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>This is login Page</h1>
            <div className="Login">
                <input className="inputLogin" name="email" type="email"  placeholder="Email" value='' />
                <br/>
                <input className="inputLogin" name="password" type="password"  placeholder="Password" value='' />
                <br/>
                <button className="buttonLogin" type="submit" >Log In</button>
                <p>Don't have an account?<Link to="/signup"> Sign up</Link></p>
            </div>
            
        </div>
    );
};

export default Login;