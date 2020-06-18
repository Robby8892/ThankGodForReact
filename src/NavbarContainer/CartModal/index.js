import React, { Component } from 'react'
import {Button, Header, Modal, Segment, Label, Image } from 'semantic-ui-react'
import axios from 'axios'
import './index.css'

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
				<div key={_id}>
					<Header as='h4'>{name}</Header>
					<p>${price}</p>
					<Image className='modal-img' size='small'  src={process.env.REACT_APP_API_URI + `image/treat/${_id}`} alt={name}/>

				</div>
			)
		})
		return(
			<Modal className='modal-container' size='small' closeIcon open={props.cartModal} onClose={props.closeCartModal}>
				<Header as='h2'>{props.userCartInfo.length > 0 ? 'Here are items in your cart.' : 'Your cart is empty'}</Header>
				<Modal.Content className='content-container'>{userCartInfo}</Modal.Content>
				{props.userCartInfo.length > 0 ? 
					<Modal.Actions><Button color='green'>Checkout</Button><Button color='red'>Clear Cart</Button></Modal.Actions>
				 :
				 null
				  }
			</Modal>
	)
}