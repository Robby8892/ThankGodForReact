import React, { Component } from 'react'
import CartInfoContainer from './CartInfoContainer'
import UserInfoContainer from './UserInfoContainer'
import emailjs from 'emailjs-com'


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
				paymentId: '',
				receipt: '',
				total: 0
			}
		}
	}

	sendEmail = e => {
		e.preventDefault()
		console.log('here is teh event on sendEmail', e);
		emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATEID, e.target, process.env.REACT_APP_EMAILJS_USERID).
			then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			})
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
			// console.log(this.state.value, 'here is value');
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

				{this.state.userInfoForm ? <UserInfoContainer
					sendEmail={this.sendEmail}
					/> : null}
			</React.Fragment>
			)
	}
}