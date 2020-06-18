import React, { Component } from 'react'
import './App.css'
import NavbarContainer from './NavbarContainer'
import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'
import AdminContainer from './AdminContainer'
import TreatContainer from './TreatContainer'
import CartContainer from './TreatContainer/CartContainer'



export default class App extends Component {
  constructor(){
    super()
    this.state = {
      home: true,
      about: false,
      treats: false,
      photosReviews: false,
      cart: false,
      navBar: true,
      admin: false,
      createTreat: false
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
    if(this.state.createTreat === false && this.state.admin === true){
      this.setState({
        home: false,
        about: false,
        treats: false,
        photosReviews: false,
        cart: false,
        navBar: false,
        createTreat: true
      })
    }
  }

  navChange = e => {
    console.log('here is the e', e);
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
        {this.state.navBar ? <NavbarContainer navChange={this.navChange}/> : null}
        {this.state.home ? <HomeContainer/> : null}
        {this.state.about ? <AboutContainer/> : null}
        {this.state.treats ? <TreatContainer/> : null}
        <CartContainer/>
      </div>
    );
  }
}