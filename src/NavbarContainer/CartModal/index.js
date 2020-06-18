import React, { Component } from 'react'
import {Button, Header, Modal, Segment, Label, Image } from 'semantic-ui-react'

export default class CartModal extends Component {
	constructor(props){
		super()
	}

	render(){
		const userCartInfo = this.props.userCartInfo.map(({cartId, name, price, imgOfTreat}) =>{
			return(
				<Modal.Content key={cartId}>
					<Header as='h4'>{name}</Header>
					<p>{price}</p>
					<Image size='small'/>
				</Modal.Content>
			)
		})
		return(
			<Modal size='mini' closeIcon>
				<Header as='h2'>{this.props.userCartInfo.length > 0 ? 'Here are items in your cart.' : 'Your cart is empty'}</Header>
				{this.props.userCartInfo.length > 0 ? 
					<Modal.Actions><Button>Checkout</Button><Button>Clear Cart</Button></Modal.Actions>
				 :
				 null
				  }
			</Modal>
		)
	}
}