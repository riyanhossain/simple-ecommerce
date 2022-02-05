import React from 'react';
import DataContex from '../dataContex/dataContex';
import Header from '../Header/Header';
import Shop from '../Shop/Shop'
import CartContex from '../CartContex/CartContex';

const Home = () => {
    return (
        <DataContex>
            <CartContex>
                <div>
                    <Header></Header>
                    <Shop></Shop>
                </div>
            </CartContex>
        </DataContex>



    );
};

export default Home;