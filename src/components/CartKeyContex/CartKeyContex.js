import React, { createContext, useState } from 'react';
import OrderList from '../OrderList/OrderList';
export const cartKeyContex=createContext()
export const CartKeyContex = (props) => {
    const [key,setKey]=useState([])
    return (
        <cartKeyContex.Provider value={[key,setKey]}>
            {props.Children}
            <OrderList/>
        </cartKeyContex.Provider>
    );
};

export default CartKeyContex;