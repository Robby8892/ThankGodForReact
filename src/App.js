import React from 'react'
import './App.css'
import Navbar from './Navbar.js'
import shoppingCart from './photos/shopping-cart.png'
import facebookLogo from './photos/App Logo Inspiraton 42.png'
import instagramLogo from './photos/Icon.png'
import cashappLogo from './photos/Cash App 1.png'
import venmoLogo from './photos/venmologo.png'
import logo from './photos/LOGO.png'
import cinRoll from './photos/Cinnamon Rolls.png'
import glazCinDo from './photos/Glazed Cinnamon Donuts.png'
import twoToDo from './photos/Two Tone Donut.png'

import { Zoom } from 'react-slideshow-image'

const images = [
  cinRoll,
  glazCinDo,
  twoToDo
]

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}


function App() {
  return (

      <React.Fragment>
        <h1 className='title'><img src={logo} alt={'image of website name, thank god for raw & vegan treats'}/></h1>
        <nav className='nav-bar'>
          <ul>
            <li className='nav-bar-item'><a href='#'>Home</a></li>
            <li className='nav-bar-item'><a href='#'>Treats</a></li>
            <li className='nav-bar-item'><a href='#'>Photos & Reviews</a></li>
            <li className='nav-bar-item'><a href='#'>About</a></li>
            <li className='nav-bar-item'><a href='#'><img className='shopping-cart' src={shoppingCart} alt={'shopping cart image'}/></a></li>
          </ul>
        </nav>
       <div className="slide-container">
         <Zoom {...zoomOutProperties}>
           {
             images.map((each, index) => <img  key={index} style={{width: "100%"}} src={each} />)
           }
         </Zoom>
       </div>
        <p className='contact'>Contact Me</p>
        <p className='phone'>Phone: (773) 879-4208</p>
        <p className='email'>Email: chelly67mom@yahoo.com</p>
        <a href='https://www.instagram.com/thankgod4rawvegantreats_/' target="_blank">
          <img className='instagram' src={instagramLogo} alt={'instagram logo'}/>
        </a>
        <a href='https://www.facebook.com/Michelle-Scott-CEO-197474354500232/' target="_blank">
          <img className='facebook' src={facebookLogo} alt={'facebook logo'}/>
        </a>
        <p className='payment-options'>We Accept:</p>
        <img className='cashapp' src={cashappLogo} alt={'cashapp logo'}/>
        <img className='venmo' src={venmoLogo} alt={'venmo logo'}/>

        <div className='review-container'>
          <ul className='reviews'>
            <p className='review-item'>“Michelle it was the best cake ever, we ate the whole thing!”</p>
            <p className='review-item'>“#blackgirlmagic!”</p>
            <p className='review-item'>“We couldnt stop eating it literally.”</p>
          </ul>
          
          
        </div>

      </React.Fragment>
  );
}

export default App;