import React from 'react';
import Breakfasts from '../Breakfast/Breakfasts';
import { useState } from 'react';
import fakeData from '../../fakeData';
const CategoryDinner = () => {
    const [breakFasts, setBreakfasts] = useState(fakeData.slice(6,12));
    
    return (
        <div>
           {
               breakFasts.map(pd1 => <Breakfasts prod = {pd1} ></Breakfasts>)
            }
           
        </div>
    );
};

export default CategoryDinner;