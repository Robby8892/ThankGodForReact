import React, { Component } from 'react'
import './App.css'
import NavbarContainer from './NavbarContainer'

import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'

import AdminContainer from './AdminContainer'

// I need to use react router to create a unique admin page
// that will be used to add treats to the website 

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      home: false,
      about: false,
      treats: false,
      photosReviews: false,
      cart: false,
      navBar: true,
      admin: false
    }
  }

  changeState = () => {
    if(this.state.admin === false ){
      this.setState({
        home: false,
        about: false,
        treats: false,
        photosReviews: false,
        cart: false,
        navBar: false,
        admin: true
      })

    }
  }

  navChange = e => {
    if(e.currentTarget.name === 'home'){
      this.setState({
        home: true,
        about: false,
        treats: false,
        photosReviews: false,
        cart: false
      })
    }
    if(e.currentTarget.name === 'about'){
      this.setState({
        home: false,
        about: true,
        treats: false,
        photosReviews: false,
        cart: false
      })
    }
    if(e.currentTarget.name === 'treats'){
      this.setState({
        home: false,
        about: false,
        treats: true,
        photosReviews: false,
        cart: false
      })
    }
    if(e.currentTarget.name === 'photosReviews'){
      this.setState({
        home: false,
        about: false,
        treats: false,
        photosReviews: true,
        cart: false
      })
    }
    if(e.currentTarget.name === 'cart'){
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
        <AdminContainer changeState={this.changeState}/>
        {this.state.navBar ? <NavbarContainer navBar={this.navBar}/> : null}
        {this.state.home ? <HomeContainer/> : null}
        {this.state.about ? <AboutContainer/> : null}
      </div>
    );
  }
}