import React from 'react';

import shoppingCart from './photos/shopping-cart.png'
import logo from './photos/LOGO.png'

export default function NavbarContainer(props) {
  return (
    <div>
    	<h1 className='title'><img src={logo} alt={'image of website name, thank god for raw & vegan treats'}/></h1>
        <nav className='nav-bar'>
          <ul>
            <li className='nav-bar-item'><a name='home' onClick={props.navBar} href='#'>Home</a></li>
            <li className='nav-bar-item'><a name='treats' onClick={props.navBar} href='#'>Treats</a></li>
            <li className='nav-bar-item'><a name='photosReviews' onClick={props.navBar} href='#'>Photos & Reviews</a></li>
            <li className='nav-bar-item'><a name='about' onClick={props.navBar} href='#'>About</a></li>
            <li className='nav-bar-item'><a name='cart' onClick={props.navBar} href='#'><img className='shopping-cart' src={shoppingCart} alt={'shopping cart image'}/></a></li>
          </ul>
        </nav>
    </div>
  );
}

