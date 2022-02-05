import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='logo'>
            <img className='logo1' src={logo} alt="" />
            <nav>
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Order Reviw</Link>
                <Link to='/inventory'>Manage Inventory</Link>

            </nav>
        </div>
    );
};

export default Header;