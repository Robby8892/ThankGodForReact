import React, { Component } from 'react'
import './App.css'
import NavbarContainer from './NavbarContainer'
import AboutContainer from './AboutContainer'
import HomeContainer from './HomeContainer'
import AdminContainer from './AdminContainer'
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
      createTreat: false,
      userCart: 0,
      cartModal: false,
      quantity: 0
    }
  }
// this needs to be refactored instead of 
// me changing the value on the cart in the nav here it should
// be changed inside of the CartContainer comp which is
// where the change is coming from 
  getCartDetails = () => {

    this.setState({
      userCart: this.state.userCart += 1
    })
  }

  removeItemFromCart = () => {
    this.setState({
      userCart: this.state.userCart -= 1
    })
  }

  emptyCart = () => {
    this.setState({
      userCart: 0
    })
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

  closeTreatPage = () => {
    this.setState({
      treats: false
    })
  }

  openCartModal = () => {
    this.setState({
      cartModal: true
    })
  }

  closeCartModal = () => {
    this.setState({
      cartModal: false
    })
  }


  render(){
  return (
      <div>
        <AdminContainer changeState={this.changeState}/>
        {this.state.navBar ? <NavbarContainer 
          navChange={this.navChange}
          userCart={this.state.userCart}
          openCartModal={this.openCartModal}
          /> : null}
        {this.state.home ? <HomeContainer/> : null}
        {this.state.about ? <AboutContainer/> : null}
        <CartContainer 
        closeTreatPage={this.closeTreatPage}
        emptyCart={this.emptyCart}
        removeItemFromCart={this.removeItemFromCart}
        cartModal={this.state.cartModal}
        getCartDetails={this.getCartDetails}
        treatPage={this.state.treats}
        userCartInfo={this.state.userCart}
        closeCartModal={this.closeCartModal}
        />
      </div>
    );
  }
}