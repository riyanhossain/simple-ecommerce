import React, { useContext } from 'react';
import { cartContex } from '../../App';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Order.css'
import ReviewItem from './reviewItem';

const Order = () => {
    const [cart, setCart] = useContext(cartContex)
    return (
        <div>
            <div className='shop'>
                    <div className="pr_container">
                    {
                            cart.map(pd =>
                                <ReviewItem product={pd} ></ReviewItem>
                            )
                        }
                    </div>
                    <div className="cart">
                        <Cart cart={cart}></Cart>
                        <button className='btnn'>Place Order</button>
                    </div>
                </div>
            
        </div>


    );
};

export default Order;