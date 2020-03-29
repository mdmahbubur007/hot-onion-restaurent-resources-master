import React from 'react';
import Dinner from '../Dinner/Dinner';
import { useState } from 'react';
import fakeData from '../../fakeData';
const CategoryDinner = () => {
    const [dinners, setDinners] = useState(fakeData.slice(6,12));
    
    return (
        <div>
           {
               dinners.map(pd => <Dinner key = {pd.key} product = {pd}></Dinner>)

               
            }
          <div >
            <button className ="button">CheckOut Your Food</button>
        </div>    
        </div>
    );
};

export default CategoryDinner;