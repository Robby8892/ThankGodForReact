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

		return(
				<div className='img-container' key={_id}>
					<img className='image' src={process.env.REACT_APP_API_URI + `image/treat/${_id}`}/>
					<h3 className='name-of-treat'>{name}</h3>
					<p className='description'>{description}</p>
					<span className='price'>${price}</span>
					<div className='quantity-container'>
					<select className='quantity'>
						<option value=''>
							Quantity
						</option>
						<option value='one'>1</option>
						<option value='two'>2</option>
						<option value='three'>3</option>
						<option value='four'>4</option>
						<option value='five'>5</option>
						<option value='six'>6</option>
						<option value='seven'>7</option>
						<option value='eight'>8</option>
						<option value='nine'>9</option>
						<option value='ten'>10</option>
					</select>
					</div>
					<button onClick={() => props.updateCart(_id) } className='order-button'>Order</button>
				</div>
			)
	})
	return(
		<React.Fragment>
			{listOfTreats}
		</React.Fragment>
		)
}

