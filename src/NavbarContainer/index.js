import React from 'react';

import shoppingCart from '../photos/shopping-cart.png'
import logo from '../photos/LOGO.png'


export default function Navbar(props) {

  return (
    <div>
    	<h1 className='title'><img src={logo} alt={' website name, thank god for raw & vegan treats'}/></h1>
        <nav className='nav-bar'>
          <ul>
            <div id="nav-1">
              <li className='nav-bar-item'><a name='home' onClick={props.navChange} href='#'>Home</a></li>
              <li className='nav-bar-item'><a name='treats' onClick={props.navChange} href='#'>Treats</a></li>
              <li className='nav-bar-item'><a name='photosReviews' onClick={props.navChange} href='#'>Photos & Reviews</a></li>
              <li className='nav-bar-item'><a name='about' onClick={props.navChange} href='#'>About</a></li>
              
            </div>

            <div id="nav-2">
              <li className='nav-bar-item'>
                <a name='cart' onClick={props.navChange} href='#' onClick={props.openCartModal}>
                  <img className='shopping-cart' src={shoppingCart} alt={'shopping cart logo'}/>
                    <span className='badge'>
                      {props.userCart > 0 ? props.userCart : null}
                    </span>
                </a>
              </li>
              
            </div>
            
          </ul>
        </nav>
    </div>
  );
}

