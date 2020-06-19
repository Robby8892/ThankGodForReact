import React from 'react'
import './index.css'
import {Button, Header, Image } from 'semantic-ui-react'
export default function CartInfoContainer(props){
	const cartContentes = props.treatsInCart.map(({imgOfTreat, name, _id, cartId, price, quantity}) => {
		return(
				<div className='order-container' key={_id}>
					<Header className='order-name' as='h4'>{name}</Header>
					<p>${price*quantity}</p>
					<small><span className='edit-quan'>Edit Quantity</span></small>
					<br/>
					<span>Quantity: 
						<strong>{quantity}</strong>
					</span>
					<Image className='order-img' size='small'  src={process.env.REACT_APP_API_URI + `image/treat/${_id}`} alt={name}/>
					<Button color='red' className='delete-button' onClick={() => props.deleteItemFromCart(_id) }>Delete {name} from cart</Button>
				</div>
			)
	})
	return(
		<React.Fragment>
			<Header className='order-header' as='h2'>Your Order Form</Header>
			<Button color='green'>Confirm Order</Button>
			{cartContentes}
		</React.Fragment>
		)
}