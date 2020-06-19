import React, { Component } from 'react'
import axios from 'axios'
import TreatContainer from '../index.js'
import CartModal from '../../NavbarContainer/CartModal'
export default class CartContainer extends Component {
	constructor(props){
		super()
		this.state = {
			cart: false,
			cartId: '',
			checkout: false,
			clearCart: false,
			treatsInCart: [],
			quantity: 1
		}
	}
// I need to gather the id info from the button clicks of each treat
// then I can use that for my update fetch call
	updateQuantity = (value) => {
		this.setState({
			quantity: value
		})
	}

	createCart = async () => {
		const cartResponse = await axios.post(process.env.REACT_APP_API_URI + 'cart/new')
			.then(res => {
				console.log('here is a good response',res.data);
				this.setState({
					cart: true,
					cartId: res.data.data._id
				})
				
			})
	}

	updateCart = async (treatId) => {
		const updatedCartResponse = await axios.put(process.env.REACT_APP_API_URI + `cart/${this.state.cartId}/${treatId}/edit`, {
			data: this.state.quantity
			})
			.then(res => {
				console.log(res, 'jere is hte response')
				if(res.data.status === 200){
					console.log('here is the update cart', res.data.data);
					const treatsInCart = this.state.treatsInCart

					treatsInCart.push(res.data.data)
					this.setState({
						treatsInCart: treatsInCart
					})
					this.props.getCartDetails(res.data.data)

				} else {
					console.log('here is treatId', treatId)
					console.log('here is res.data.data.quantity', res)
					const findAndReplaceTreat = this.state.treatsInCart.filter(({_id}) => _id === treatId)
					const updatedTreatsInState = this.state.treatsInCart

					this.state.treatsInCart.forEach((item, i) => {
						if(item._id == findAndReplaceTreat[0]._id){
							updatedTreatsInState[i].quantity = res.data.data.quantity
							this.setState({
								treatsInCart: updatedTreatsInState
							}) 
						}
					})

					console.log(findAndReplaceTreat, 'here is findAndReplaceTreat')
				}

			})
	}
	deleteItemFromCart = async (treatId) => {
		const deletedItemResponse = await axios.delete(process.env.REACT_APP_API_URI, + `${treatId}/` + this.state.cartId)
			.then(res => {
				console.log(res.data.data, 'here is that deleted cart');
			})
	}


	componentDidMount(){
		this.createCart()
	}

	render(){
		console.log('here is quantity', this.state.quantity);
		return(
			<React.Fragment>
				{this.props.treatPage ? <TreatContainer
						updateQuantity={this.updateQuantity}
						updateCart={this.updateCart}
						onClick={this.onClick}
					/> : null}
					<CartModal
					userCartInfo={this.props.userCartInfo}
					/>
			</React.Fragment>
		)
	}
}