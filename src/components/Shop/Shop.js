import React, { createContext, useContext, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Shop.css'
import { dataContex1 } from '../dataContex/dataContex';
import { cartContex1 } from '../CartContex/CartContex';
import { cartKeyContex } from '../CartKeyContex/CartKeyContex';


const Shop = () => {
    const [products, setProducts] = useContext(dataContex1)
    const [cart, setCart] = useContext(cartContex1)
    const handleClick = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart)
        localStorage.setItem(pd.key,JSON.stringify(pd))
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