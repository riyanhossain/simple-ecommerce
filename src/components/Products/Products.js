import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {name,seller,price,img,stock}=props.product
    return (
        <div className='products'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="info-container">
                <h3 className='name'>{name}</h3>
                <h5>By:{seller}</h5>
                <p className='price'>${price}</p>
                <h5>only {stock} left in stock - order soon</h5>
                <button className='bttn' onClick={props.handleClick}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Products;