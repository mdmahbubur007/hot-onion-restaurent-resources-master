import React from 'react';
import fakeData from '../../fakeData';
import Breakfasts from '../Breakfast/Breakfasts';
import { useState } from 'react';




const Category = () => {
    const [breakFasts, setBreakfasts] = useState(fakeData.slice(0,6));
    
    return (
        <div >
            {
                breakFasts.map(pd1 => <Breakfasts key = {pd1.key} prod = {pd1} ></Breakfasts>)
                       
            }
        <div >
            <button className ="btn btn-danger">CheckOut Your Food</button>
        </div>            
        </div>
       
    );
};

export default Category;