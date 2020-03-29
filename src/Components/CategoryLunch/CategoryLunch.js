import React,{useState} from 'react';
import Lunches from '../Lunches/Lunches';
import fakeData from '../../fakeData';

const CategoryLunch = () => {
    const [Lunchs, setLunchs] = useState(fakeData.slice(12,18));
    return (
        <div>
             {
               Lunchs.map(pd2 => <Lunches prodct = {pd2}></Lunches> ) 
            } 
        <div >
            <button className ="button">CheckOut Your Food</button>
        </div>   
        </div>
    );
};

export default CategoryLunch;