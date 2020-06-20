import React, { Component } from 'react'
import CartInfoContainer from './CartInfoContainer'
import UserInfoContainer from './UserInfoContainer'

export default class OrderContainer extends Component {
	constructor(props){
		super()
		this.state = {
			userInfoForm: false,
			cartInfo: true,
			editQuantity: false,
			value: 0,
			merchantEmail: process.env.EMAIL,
			emailForm: {
				firstName: '',
				lastName: '',
				shippingAddres: '',
				shippingAddres2: '',
				city: '',
				state: '',
				zip: '',
				phone: '',
				email: '',
				vc: '',
				total: 0
			}
		}
	}
	
	onClick = e => {
		this.setState({
			editQuantity: !this.state.editQuantity
		})
	}

	onChange = e => {
		this.setState({
			value: e.target.value
		}, () => {
			this.props.updateQuantity(this.state.value)
		})
	}

	handleEvent = e => {
		if(e.type == 'mouseup'){
			console.log(this.state.value, 'here is value');
			this.setState({
				editQuantity: false
			})
		}
	}

	onClickConfirmOrder = e => {
		this.setState({
			userInfoForm: true,
			cartInfo: false 
		})
	}

	render(){
		console.log(this.state.value);
		return(
			<React.Fragment>
				{
					this.state.cartInfo ? <CartInfoContainer
					treatsInCart={this.props.treatsInCart}
					deleteItemFromCart={this.props.deleteItemFromCart}
					editQuantity={this.state.editQuantity}
					onClick={this.onClick}
					handleEvent={this.handleEvent}
					updateCart={this.props.updateCart}
					value={this.state.value}
					onChange={this.onChange}
					onClickConfirmOrder={this.onClickConfirmOrder}
					/> 
					: 
					null
				}

				{this.state.userInfoForm ? <UserInfoContainer/> : null}
			</React.Fragment>
			)
	}
}