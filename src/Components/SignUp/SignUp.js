import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="Login">
                <input name="name" type="text" placeholder="Name" value='' />
                <br/>
                <input name="email" type="email" placeholder="Email" value='' />
                <br/>
                <input name="password" type="password" placeholder="Password" value='' />
                <br/>
                <input name="confirmPassword" type="password" placeholder="Confirm Password" value='' />
                <br/>
                <button type="submit" className="buttonLogin">Submit</button>
                <p ><Link to="/Login">Already have an account</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;