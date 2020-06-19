import React, { Component } from 'react'
import axios from 'axios'
import TreatContainer from '../index.js'
import CartModal from '../../NavbarContainer/CartModal'
import OrderContainer from '../../OrderContainer'
export default class CartContainer extends Component {
	constructor(props){
		super()
		this.state = {
			cart: false,
			cartId: '',
			checkout: false,
			clearCart: false,
			treatsInCart: [],
			quantity: 1,
			contentsInCart: false,
			orderContainer: false
		}
	}
// I need to gather the id info from the button clicks of each treat
// then I can use that for my update fetch call
	updateQuantity = (value) => {
		console.log('here is the value', value);
		this.setState({
			quantity: value
		})
	}

	createCart = () => {
		axios.post(process.env.REACT_APP_API_URI + 'cart/new')
			.then(res => {
				this.setState({
					cart: true,
					cartId: res.data.data._id
				})
				
			})
	}

	updateCart = (treatId) => {
		console.log('here I am in updateCart', treatId);
		axios.put(process.env.REACT_APP_API_URI + `cart/${this.state.cartId}/${treatId}/edit`, {
			data: this.state.quantity
			})
			.then(res => {
				console.log(res.data.status, 'here is the status?');
				if(res.data.status === 200){
					// console.log('here is the update cart', res.data.data);
					const treatsInCart = this.state.treatsInCart
					treatsInCart.push(res.data.data)
					this.setState({
						treatsInCart: treatsInCart,
						contentsInCart: true,
					})
					this.props.getCartDetails(res.data.data)

				} else {

					const findAndReplaceTreat = this.state.treatsInCart.filter(({_id}) => _id === treatId)
					const updatedTreatsInState = this.state.treatsInCart

					this.state.treatsInCart.forEach((item, i) => {
						if(item._id === findAndReplaceTreat[0]._id){
							console.log(res.data.data.quantity, 'here is the response data of quantity');
							updatedTreatsInState[i].quantity = res.data.data.quantity
							this.setState({
								treatsInCart: updatedTreatsInState
							}) 
						}
					})

				}

			})
	}
	deleteItemFromCart = (treatId) => {

		axios.delete(process.env.REACT_APP_API_URI + `cart/${treatId}/${this.state.cartId}`)
			.then(res => {

				const remainingTreats = res.data.data.treatsInCart
				const remainingCart = res.data.data.treatsInCart

				this.setState({
					treatsInCart: remainingTreats
				})
				this.props.removeItemFromCart()
				if(this.state.treatsInCart.length === 0){
					this.setState({
						contentsInCart: false
					})
				}
			})
	}
	clearCart = () => {

		axios.delete(process.env.REACT_APP_API_URI + `cart/${this.state.cartId}`)
		.then(res => {
			console.log(res.data.data, 'cart is now cleared here is the data');
			this.setState({
				contentsInCart: false
			})
			this.props.emptyCart()
		})
	} 
	componentDidMount(){
		this.createCart()
	}

	cartCheckOut = () => {
		console.log('are you here in cartCheckOut');
		this.setState({
			orderContainer: true
		})
		this.props.closeCartModal()
		this.props.closeTreatPage()

	}

	render(){
		console.log('hereis treatPage', this.state.treatPage)
		console.log('here is orderContainer', this.state.orderContainer);
		return(
			<React.Fragment>
				{this.props.treatPage ? <TreatContainer
						updateQuantity={this.updateQuantity}
						updateCart={this.updateCart}
						onClick={this.onClick}
					/> : null}
					{this.props.cartModal ? 
					<CartModal
						cartCheckOut={this.cartCheckOut}
						clearCart={this.clearCart}
						cartModal={this.props.cartModal}
						userCartInfo={this.state.treatsInCart}
						closeCartModal={this.props.closeCartModal}
						deleteItemFromCart={this.deleteItemFromCart}
						contentsInCart={this.state.contentsInCart}
					/>
					:
					null
					}
					{this.state.orderContainer ? 
						<OrderContainer/>
						:
						null
					}
			</React.Fragment>
		)
	}
}