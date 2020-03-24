import React from 'react';
import fakeData from '../../fakeData';
import Dinner from '../Dinner/Dinner';
import { useState } from 'react';



const Category = () => {
    const [dinners, setDinners] = useState(fakeData.slice(0,6));
    
    return (
        <div>
            {
                dinners.map(pd => <Dinner product = {pd}></Dinner>)
                       
            }
                         
        </div>
    );
};

export default Category;