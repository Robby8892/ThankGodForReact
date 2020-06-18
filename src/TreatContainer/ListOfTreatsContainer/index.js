import React from 'react'
import axios from 'axios'
import './index.css'
import { Dropdown } from 'semantic-ui-react'
const options = [
  { key: 1, text: '', value: 1 },
  { key: 2, text: '', value: 2 },
  { key: 3, text: '', value: 3 },
  { key: 4, text: '', value: 4 },
  { key: 5, text: '', value: 5 },
  { key: 6, text: '', value: 6 },
  { key: 7, text: '', value: 7 },
  { key: 8, text: '', value: 8 },
  { key: 9, text: '', value: 9 },
  { key: 10, text: '', value: 10 },
]

const DropdownExampleClearable = () => (
  <Dropdown clearable options={options} selection />
)

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
					<div role="listbox" aria-expanded="false" class="ui selection dropdown" tabindex="0">
					  <div class="text" role="alert" aria-live="polite" aria-atomic="true"></div>
					  <i aria-hidden="true" class="dropdown icon"></i>
					  <div class="menu transition">
					    <div

					      role="option"
					      aria-checked="false"
					      aria-selected="true"
					      class="selected item"
					    >
					      <span class="text">1</span>
					    </div>
					    <div

					      role="option"
					      aria-checked="false"
					      aria-selected="false"
					      class="item"
					    >
					      <span class="text">2</span>
					    </div>
					    <div

					      role="option"
					      aria-checked="false"
					      aria-selected="false"
					      class="item"
					    >
					      <span class="text">3</span>
					    </div>
					  </div>
					</div>
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
