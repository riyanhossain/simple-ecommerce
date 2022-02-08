import React, { createContext, useContext, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { cartContex } from '../../App';
import fakedata from '../../fakeData'


const Shop = () => {
    const [products, setProducts] = useState(fakedata)
    const [cart, setCart] = useContext(cartContex)
    const handleClick = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart)
    }
 
    return (
            <div>
                <div className='shop'>
                    <div className="pr_container">
                        {
                            products.map(pd =>
                                <Products handleClick={() => handleClick(pd)} product={pd}></Products>
                            )
                        }

                    </div>
                    <div className="cart">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>


    );
};

export default Shop;