import React, { Component } from 'react'
import axios from 'axios'
import TreatContainer from '../index.js'
export default class CartContainer extends Component {
	constructor(props){
		super()
		this.state = {
			cart: false,
			cartId: '',
			checkout: false,
			clearCart: false,
			treatsInCart: []
		}
	}
// I need to gather the id info from the button clicks of each treat
// then I can use that for my update fetch call
	createCart = async () => {
		const cartResponse = await axios.post(process.env.REACT_APP_API_URI + 'cart/new')
			.then( res => {
				console.log('here is a good response',res.data);
				this.setState({
					cart: true,
					cartId: res.data._id
				})
				
			})
	}

	updateCart = async (treatId) => {
		console.log('here is treatId', treatId);
	}

	onClick = (e) => {
		console.log(e.target);
	}

	componentDidMount(){
		this.createCart()
	}

	render(){
		return(
			<React.Fragment>
				{this.props.treatPage ? <TreatContainer
						updateCart={this.updateCart}
						onClick={this.onClick}
					/> : null}
			</React.Fragment>
		)
	}
}