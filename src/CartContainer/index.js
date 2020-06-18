import React, { Component } from 'react'
import axios from 'axios'

export default class CartContainer extends Component {
	constructor(props){
		super()
		this.state = {
			cart: false,
			cartId: ''
		}
	}

	createCart = async () => {
		const cartResponse = await axios.post(process.env.REACT_APP_API_URI + 'cart/new')
			.then( res => {
				console.log('here is a good response',res.data);
			})
		
		console.log(cartResponse);
	}

	componentDidMount(){
		this.createCart()
	}

	render(){
		return(
			<React.Fragment>
				CartContainer
			</React.Fragment>
		)
	}
}