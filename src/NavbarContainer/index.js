import React from 'react';
// import CartContainer from '../CartContainer'

import shoppingCart from '../photos/shopping-cart.png'
import logo from '../photos/LOGO.png'

// for my cart to work I need to do a fetch call in CartContainer that will 
// get a new cart for the user as soon as they hit the site

export default function Navbar(props) {
  return (
    <div>
    	<h1 className='title'><img src={logo} alt={' website name, thank god for raw & vegan treats'}/></h1>
        <nav className='nav-bar'>
          <ul>
            <li className='nav-bar-item'><a name='home' onClick={props.navChange} href='#'>Home</a></li>
            <li className='nav-bar-item'><a name='treats' onClick={props.navChange} href='#'>Treats</a></li>
            <li className='nav-bar-item'><a name='photosReviews' onClick={props.navChange} href='#'>Photos & Reviews</a></li>
            <li className='nav-bar-item'><a name='about' onClick={props.navChange} href='#'>About</a></li>
            <li className='nav-bar-item'><a name='cart' onClick={props.navChange} href='#'><img className='shopping-cart' src={shoppingCart} alt={'shopping cart image'}/></a></li>
          </ul>
        </nav>
    </div>
  );
}

