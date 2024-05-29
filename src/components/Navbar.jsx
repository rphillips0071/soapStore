import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartContext } from '../context/ShoppingCartContext';



function Navbar() {
    const { cartItems } = useContext(ShoppingCartContext);
    const numberOfItemsDisplay = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    
    return (
        <div className='navbar_container'>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>
            <div className='nav_group'>
                <div className='nav_links'>
                    <Link to="/handsoap">
                        <h2>Hand Soap</h2>
                    </Link>
                </div>
                <div className='nav_links'>
                    <Link to="/bodywash">
                        <h2>Bodywash</h2>
                    </Link>

                </div>
                <div className='nav_links'>

                    <Link to='/cart'> <FontAwesomeIcon icon={faCartShopping} size="2x" className='cart_icon' />
                        <span className="cart_number">{numberOfItemsDisplay}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
