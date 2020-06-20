import React from 'react'
import './index.css'
import {Button, Header, Image } from 'semantic-ui-react'
export default function CartInfoContainer(props){
	const cartContentes = props.treatsInCart.map(({imgOfTreat, name, _id, cartId, price, quantity}) => {
		return(
				<div className='order-container' key={_id}>
					<Header className='order-name' as='h4'>{name}</Header>
					<p>${price*quantity}</p>
					{!props.editQuantity ? 
						<small><span onClick={props.onClick} className='edit-quan'>Edit Quantity</span></small>
						:
					<div className='quantity-container'>
					<select onChange={props.onChange} value={props.value} className='quantity'>
						<option value='1'>one</option>
						<option value='2'>two</option>
						<option value='3'>three</option>
						<option value='4'>four</option>
						<option value='5'>five</option>
						<option value='6'>six</option>
						<option value='7'>seven</option>
						<option value='8'>eight</option>
						<option value='9'>nine</option>
						<option value='10'>ten</option>
					</select>
					<small>
						<span onMouseDown={() => props.updateCart(_id)} onMouseUp={props.handleEvent} className='edit-quan'>Confirm Quantity</span>
					</small>
					</div>
					}
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
			<Button onClick={props.onClickConfirmOrder} color='green'>Confirm Order</Button>
			{cartContentes}
		</React.Fragment>
		)
}