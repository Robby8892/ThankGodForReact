import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar.js'
import shoppingCart from './photos/shopping-cart.png'
import logo from './photos/LOGO.png'

import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'



export default class App extends Component {
  constructor(){
    super()
    this.state = {
      home: false,
      about: true,
      treats: false,
      photosReviews: false,
      cart: false
    }
  }

  navBar = e => {
    if(e.currentTarget.name == 'home'){
      this.setState({
        home: true,
        about: false,
        treats: false,
        photosReviews: false,
        cart: false
      })
    }
    if(e.currentTarget.name == 'about'){
      this.setState({
        home: false,
        about: true,
        treats: false,
        photosReviews: false,
        cart: false
      })
    }
    if(e.currentTarget.name == 'treats'){
      this.setState({
        home: false,
        about: false,
        treats: true,
        photosReviews: false,
        cart: false
      })
    }
    if(e.currentTarget.name == 'photosReviews'){
      this.setState({
        home: false,
        about: false,
        treats: false,
        photosReviews: true,
        cart: false
      })
    }
    if(e.currentTarget.name == 'cart'){
      this.setState({
        home: false,
        about: false,
        treats: false,
        photosReviews: false,
        cart: true
      })
    }
  }
  render(){


  return (
      <div>
        <h1 className='title'><img src={logo} alt={'image of website name, thank god for raw & vegan treats'}/></h1>
        <nav className='nav-bar'>
          <ul>
            <li className='nav-bar-item'><a name='home' onClick={this.navBar} href='#'>Home</a></li>
            <li className='nav-bar-item'><a name='treats' onClick={this.navBar} href='#'>Treats</a></li>
            <li className='nav-bar-item'><a name='photosReviews' onClick={this.navBar} href='#'>Photos & Reviews</a></li>
            <li className='nav-bar-item'><a name='about' onClick={this.navBar} href='#'>About</a></li>
            <li className='nav-bar-item'><a name='cart' onClick={this.navBar} href='#'><img className='shopping-cart' src={shoppingCart} alt={'shopping cart image'}/></a></li>
          </ul>
        </nav>
        {this.state.home ? <HomeContainer/> : null}
        {this.state.about ? <AboutContainer/> : null}
      </div>
    );
  }
}