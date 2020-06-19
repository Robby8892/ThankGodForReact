import React, { Component } from 'react'
import CartInfoContainer from './CartInfoContainer'


export default class OrderContainer extends Component {
	constructor(props){
		super()
		this.state = {
			userInfoForm: false,
			cartInfo: true,
			editQuantity: false
		}
	}

	onClick = e => {
		this.setState({
			editQuantity: !this.state.editQuantity
		})
	}

	render(){
		console.log(this.state.editQuantity);
		return(
			<React.Fragment>
				{
					this.state.cartInfo ? <CartInfoContainer
					treatsInCart={this.props.treatsInCart}
					deleteItemFromCart={this.props.deleteItemFromCart}
					editQuantity={this.state.editQuantity}
					onClick={this.onClick}
					/> 
					: 
					null
				}
			</React.Fragment>
			)
	}
}