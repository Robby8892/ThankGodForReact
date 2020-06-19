import React, { Component } from 'react'
import CartInfoContainer from './CartInfoContainer'


export default class OrderContainer extends Component {
	constructor(props){
		super()
		this.state = {
			userInfoForm: false,
			cartInfo: true 
		}
	}

	render(){
		return(
			<React.Fragment>
				{
					this.state.cartInfo ? <CartInfoContainer
					treatsInCart={this.props.treatsInCart}
					deleteItemFromCart={this.props.deleteItemFromCart}
					/> 
					: 
					null
				}
			</React.Fragment>
			)
	}
}