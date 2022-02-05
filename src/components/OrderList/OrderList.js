import React, { useContext } from 'react';
import { cartContex1 } from '../CartContex/CartContex';
import { cartKeyContex } from '../CartKeyContex/CartKeyContex';
import { dataContex1 } from '../dataContex/dataContex';

const OrderList = () => {
    const [key, setKey] = useContext(cartKeyContex)
    const [products, setProducts] = useContext(dataContex1)
    const newCart=[]
    products.map(pd=>{
        if(pd.key===JSON.parse(localStorage.getItem(`${pd.key}`)))
         newCart = [...key, pd];
        setKey(newCart)
    })
    console.log(key)
    return (
        <div>
            <h1>{key.key}</h1>
        </div>
    );
};

export default OrderList;