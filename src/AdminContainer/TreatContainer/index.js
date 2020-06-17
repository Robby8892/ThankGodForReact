import React, { Component } from 'react'

export default class TreatContainer extends Component {
	constructor(props){
		props.changeState()
		super()
		this.state = {
			name: '',
			price: '',
			imgOfTreat: ''
		}
	}

	render(){
		return(
			<React.Fragment>
				<div id='login'>
					<form id='login-form'>
						<fieldset>
							<legend>Add Treats to Site</legend>
							<label htmlFor="name">Name of treat:</label>
							<input 
								id='name' 
								type="text" 
								name="name" 
								placeholder="Enter name of treat"
								required minLength='1' 
								/>
							<label htmlFor="price">Price of treat:</label>
							<input 
								id='price' 
								type="number" 
								name="price" 
								placeholder="Enter the numerical value for the price"
								required minLength='1' 
								/>
							<label htmlFor="imgOfTreat">Image of treat:</label>
							<input 
								id='imgOfTreat' 
								type="file" 
								name="imgOfTreat" 
								required minLength='1' 
								/>
							<button>Submit Treat</button>
						</fieldset>
					</form>
				</div>
			</React.Fragment>
		)
	}
}
