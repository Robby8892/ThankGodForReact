import React, { Component } from 'react'
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



import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'



export default class App extends Component {
  constructor(){
    super()
    this.state = {
      home: true,
      about: false,
      treats: false,
      photosReviews: false
    }
  }

  navBar = e => {
    console.log(e.target.name);
  }
  render(){


  return (
      <div>
        <h1 className='title'><img src={logo} alt={'image of website name, thank god for raw & vegan treats'}/></h1>
        <nav className='nav-bar'>
          <ul>
            <li onClick={this.navBar} className='nav-bar-item'><a href='#'>Home</a></li>
            <li onClick={this.navBar} className='nav-bar-item'><a href='#'>Treats</a></li>
            <li onClick={this.navBar} className='nav-bar-item'><a href='#'>Photos & Reviews</a></li>
            <li onClick={this.navBar} className='nav-bar-item'><a href='#'>About</a></li>
            <li onClick={this.navBar} className='nav-bar-item'><a href='#'><img className='shopping-cart' src={shoppingCart} alt={'shopping cart image'}/></a></li>
          </ul>
        </nav>
        {this.state.home ? <HomeContainer/> : null}
      </div>
    );
  }
}