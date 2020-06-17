import React, { Component } from 'react'

const formData = new FormData()

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
		console.log('wtf are you doing?');
		// this.props.createTreatCall(this.state)
	}

	onChange = e => {

		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onChangeImg = e => {
		this.setState({
			imgOfTreat: e.target.files[0]
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
								onChange={this.onChange} 
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
								onChange={this.onChange}
								/>
							<br/>
							<label htmlFor="imgOfTreat">Image of treat:</label>
							<input 
								id='imgOfTreat' 
								type="file" 
								name="imgOfTreat" 
								required minLength='1' 
								onChange={this.onChangeImg}
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


