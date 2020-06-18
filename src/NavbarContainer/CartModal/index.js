import React, { Component } from 'react'
import {Button, Header, Modal, Segment, Label, Image } from 'semantic-ui-react'
import axios from 'axios'

export default function CartModal(props) {

		const userCartInfo = props.userCartInfo.map(({cartId, name, price, imgOfTreat, _id}) =>{
			const getImg = async () => {
				const imgResponse = await axios.get(process.env.REACT_APP_API_URI + `image/treat/${_id}`)
				.then(
					res => {
						return res.data
					}
				)
			};
			return(
				<div key={cartId}>
					<Header as='h4'>{name}</Header>
					<p>{price}</p>
					<Image size='small'  src={process.env.REACT_APP_API_URI + `image/treat/${_id}`}/>
					
				</div>
			)
		})
		return(
			<Modal size='mini' closeIcon open={props.cartModal} onClose={props.closeCartModal}>
				<Header as='h2'>{props.userCartInfo.length > 0 ? 'Here are items in your cart.' : 'Your cart is empty'}</Header>
				{userCartInfo}
				{props.userCartInfo.length > 0 ? 
					<Modal.Actions><Button>Checkout</Button><Button>Clear Cart</Button></Modal.Actions>
				 :
				 null
				  }
			</Modal>
	)
}