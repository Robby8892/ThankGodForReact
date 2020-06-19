import React from 'react'
import axios from 'axios'
import './index.css'


export default function ListOfTreatsContainer(props){
	const listOfTreats = props.treats.map(({_id, price, name, imgOfTreat, description})=> {
		const getImg = async () => {
			const imgResponse = await axios.get(process.env.REACT_APP_API_URI + `image/treat/${_id}`)
			.then(
				res => {
					return res.data
				}
			)
		};
// when the user chooses their quantity,
// they will 
		return(
				<div className='img-container' key={_id}>
					<img className='image' src={process.env.REACT_APP_API_URI + `image/treat/${_id}`}/>
					<h3 className='name-of-treat'>{name}</h3>
					<p className='description'>{description}</p>
					<span className='price'>${price}</span>
					<div className='quantity-container'>
					<select onBlur={props.onBlur} className='quantity'>
						<option value=''>
							Quantity
						</option>
						<option onBlur={props.onBlur} value='1'>one</option>
						<option onBlur={props.onBlur} value='2'>two</option>
						<option onBlur={props.onBlur} value='3'>three</option>
						<option onBlur={props.onBlur} value='4'>four</option>
						<option onBlur={props.onBlur} value='5'>five</option>
						<option onBlur={props.onBlur} value='6'>six</option>
						<option onBlur={props.onBlur} value='7'>seven</option>
						<option onBlur={props.onBlur} value='8'>eight</option>
						<option onBlur={props.onBlur} value='9'>nine</option>
						<option onBlur={props.onBlur} value='10'>ten</option>
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

