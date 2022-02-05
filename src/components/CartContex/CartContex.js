import React, { createContext, useState } from 'react';

export const cartContex1=createContext();
export const CartContex = (props) => {
    const [cart,setCart]=useState([])
    return (
        <cartContex1.Provider value={[cart,setCart]}>
            {props.children}
        </cartContex1.Provider>
    );
};

export default CartContex;