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
			orderContainer: false,
			total: 0
		}
	}
// I need to gather the id info from the button clicks of each treat
// then I can use that for my update fetch call

	updateQuantity = (value) => {

		console.log("this is value in updateQuantity: ", value);

		this.setState({
			quantity: value
		})


	}

	onChangeValue = (e) => {
		console.log("this is value : ", e.target.value);

		this.setState({
			quantity: e.target.value
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

		axios.put(process.env.REACT_APP_API_URI + `cart/${this.state.cartId}/${treatId}/edit`, {
			data: this.state.quantity
			})
			.then(res => {
				// console.log(res.data.status, 'here is the status?');
				if(res.data.status === 200){
					// console.log('here is the update cart', res.data.data);
					const treatsInCart = this.state.treatsInCart
					treatsInCart.price = treatsInCart.price * this.state.quantity
					treatsInCart.push(res.data.data)
					let initialVal = 0
					let sum = treatsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialVal)

					console.log("this is sum in CartContainer: ", sum);

					this.setState({
						treatsInCart: treatsInCart,
						contentsInCart: true,
						total: sum
					})
					this.props.getCartDetails(res.data.data)

				} else {

					const findAndReplaceTreat = this.state.treatsInCart.filter(({_id}) => _id === treatId)
					const updatedTreatsInState = this.state.treatsInCart
					let initialVal = 0
					const treatsInCart = this.state.treatsInCart
					let sum = treatsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialVal)
					console.log("this is sum in CartContainer: ", sum);

					this.state.treatsInCart.forEach((item, i) => {
						if(item._id === findAndReplaceTreat[0]._id){
							// console.log(res.data.data.quantity, 'here is the response data of quantity');
							updatedTreatsInState[i].quantity = res.data.data.quantity
							updatedTreatsInState[i].price = updatedTreatsInState[i].price * this.state.quantity
							this.setState({
								treatsInCart: updatedTreatsInState,
								total: sum
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
				let initialVal = 0
				let sum = remainingTreats.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialVal)
				console.log("this is sum in CartContainer: ", sum);


				this.setState({
					treatsInCart: remainingTreats,
					total: sum
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
			// console.log(res.data.data, 'cart is now cleared here is the data');
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
		// console.log('are you here in cartCheckOut');
		this.setState({
			orderContainer: true
		})
		this.props.closeCartModal()
		this.props.closeTreatPage()

	}

	render(){
		console.log("this is quantity in state: ", this.state.quantity);
		return(
			<React.Fragment>
				{this.props.treatPage ? <TreatContainer
						updateQuantity={this.updateQuantity}
						updateCart={this.updateCart}
						onClick={this.onClick}
						onChangeValue={this.onChangeValue}
						quantity={this.state.quantity}
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
						total={this.state.total}
					/>
					:
					null
					}

					{this.state.orderContainer ? 
						<OrderContainer
						deleteItemFromCart={this.deleteItemFromCart}
						treatsInCart={this.state.treatsInCart}
						updateCart={this.updateCart}
						updateQuantity={this.updateQuantity}
						/>
						:
						null
					}
			</React.Fragment>
		)
	}
}