import React, { createContext } from 'react';
import './Cart.css'
export const CartContex=createContext()
const Cart = (props) => {
    let countItems=0;
    countItems=props.cart.length
    let totalPrice=0;
    for (let i = 0; i < props.cart.length; i++) {
       totalPrice = totalPrice + props.cart[i].price;
    }
    let shippigCost=totalPrice*(2/100);
    let tax=totalPrice*(7/100);
    let total=totalPrice+shippigCost+tax;
    return (
        <CartContex.Provider value={props.cart}>
            <h3>Order Summery</h3>
            <h4>Order Item: {countItems}</h4>
            <h5>Items price: {totalPrice.toFixed(2)}</h5>
            <h5>Shipping Cost: {shippigCost.toFixed(2)}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>
            <h4>Total: {total.toFixed(2)}</h4>

        </CartContex.Provider>
    );
};

export default Cart;