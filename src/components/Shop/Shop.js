import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState(fakeData)
    const [cart,setCart]=useState([])
    const handleClick=(pd)=>{
        const newCart=[...cart,pd];
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className="pr_container">
                {
                    products.map(pd=><Products handleClick={()=>handleClick(pd)} product={pd}></Products>)
                }

            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;