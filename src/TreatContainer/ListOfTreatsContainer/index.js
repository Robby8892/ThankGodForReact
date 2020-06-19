import React from 'react'
import './index.css'


export default function ListOfTreatsContainer(props){
	const listOfTreats = props.treats.map(({_id, price, name, imgOfTreat, description})=> {
		return(
				<div className='img-container' key={_id}>
					<img className='image' src={process.env.REACT_APP_API_URI + `image/treat/${_id}`} alt={name}/>
					<h3 className='name-of-treat'>{name}</h3>
					<p className='description'>{description}</p>
					<span className='price'>${price}</span>
					<div className='quantity-container'>
					<select onBlur={props.onBlur} className='quantity'>
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
					</div>
					<button 
						onClick={() => props.updateCart(_id)} 
						className='order-button'>
						Order
					</button>
				</div>
			)
	})
	return(
		<React.Fragment>
			{listOfTreats}
		</React.Fragment>
		)
}

