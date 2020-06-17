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
	onSubmit = e => {
		e.preventDefault()
		this.props.loginAdmin(this.state)
	}

	onChange = e => {
		console.log('here is img', e.target.imgOfTreat);
		console.log('here is value', e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	clearForm = () => {
		this.setState({
			imgOfTreat: '',
			price: '',
			name: ''
		})
	}

	componentDidMount() {
		this.clearForm()
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
								value={this.state.name} 
								/>
							<br/>
							<label htmlFor="price">Price of treat:</label>
							<input 
								id='price' 
								type="number" 
								name="price" 
								placeholder="Enter the price"
								required minLength='1' 
								value={this.state.price}
								/>
							<br/>
							<label htmlFor="imgOfTreat">Image of treat:</label>
							<input 
								id='imgOfTreat' 
								type="file" 
								name="imgOfTreat" 
								required minLength='1' 
								/>
							<br/>	
							<button>Submit Treat</button>
						</fieldset>
					</form>
				</div>
			</React.Fragment>
		)
	}
}
