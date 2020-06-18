import React, { Component } from 'react'

export default class CartContainer extends Component{
	constructor(props){
		super()
		this.state = {
			cart: false,
			cartId: ''
		}
	}

	render(){
		return(
			<React.Fragment>
				CartContainer
			</React.Fragment>
		)
	}
}