import React from 'react';
import { useParams, Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ProductDetail.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = () => {
    let {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    const [count, setCount] = useState(0);
    //console.log(product)
    return (
        <div className="product-details">
            <div className="product-description">
                <h1>{product.name}</h1>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, veniam expedita a laudantium nesciunt suscipit vel ipsum minus quisquam blanditiis error nobis eius consectetur veritatis nisi dolorum quasi voluptatum omnis excepturi hic rem iste. Mollitia, iure. Ducimus sint ullam inventore excepturi exercitationem voluptates neque rerum ipsum alias quam aperiam numquam assumenda culpa expedita nostrum sequi, dolorem ratione iste autem voluptatum? Velit, est ex minus voluptatibus rem fugit ut delectus officiis?</h4>
                <div className="product-Price">
                    <div>
                        <h1>tk. {product.Price}</h1>
                    </div>
                    <div className = "addCount">
                        <span className="addLess" onClick = {()=> setCount(count-1)}>-</span> <span className="addLess">{count}</span> <span className="addLess" onClick = {()=> setCount(count+1)}>+</span>
                     </div>
                </div>
                <Link to="/Login">
                    <button className="signUp"><FontAwesomeIcon icon={faShoppingCart}/> add</button>
                </Link>
            </div>
            <div className="product-image">
                <img src={product.img} alt=""/>
            </div>  
        </div>
    );
};

export default ProductDetail;