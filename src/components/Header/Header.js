import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='logo'>
            <img className='logo1' src={logo} alt="" />
            <nav>
                <a href='/shop'>Shop</a>
                <a href='/order'>Order Reviw</a>
                <a href='/inventory'>Manage Inventory</a>

            </nav>
        </div>
    );
};

export default Header;