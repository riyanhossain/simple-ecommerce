import React, { useContext } from 'react';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import './Order.css'
import  CartContex, { cartContex1 } from '../CartContex/CartContex';
import Shop from '../Shop/Shop';
import Home from '../Home/Home';
import DataContex from '../dataContex/dataContex';
import OrderList from '../OrderList/OrderList';

const Order = () => {
    return (
        <DataContex>
            <CartContex>
                <div>
                    <Header></Header>
                    <OrderList/>
                </div>
            </CartContex>
        </DataContex>


    );
};

export default Order;