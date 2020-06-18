import React, { Component } from 'react'
import './index.css'


export default class TreatContainer extends Component {
	constructor(props){
		props.changeState()
		super()
		this.handleFile = this.handleFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			name: '',
			price: '',
			description: '',
			imgOfTreat: null,
		}
	}

	onSubmit = e => {
		e.preventDefault()
		this.clearForm()
		this.props.createTreatCall(this.state)
	}

	onChange = e => {

		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleFile = e => {
		this.setState({
			imgOfTreat: e.target.files[0]
		})
	}

	clearForm = () => {
		this.setState({
			imgOfTreat: null,
			price: '',
			name: '',
			description: ''
		})
	}

	componentDidMount() {
		this.clearForm()
	}

	render(){

		return(
			<React.Fragment>
				<div id='login'>
				<span className='msg'>{this.props.message}</span>
				<span className='err-msg'>{this.props.mes}</span>
					<form id='login-form' onSubmit={this.onSubmit}>
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
								accept="image/png, image/jpeg"
								required minLength='1' 
								onChange={this.handleFile}
								/>
							<br/>	
							<label htmlFor="description">Treat description:</label>
							<textarea
								name='description'
								type='text'
								id='description'
								required minLength='1' 
								value={this.state.description}
								onChange={this.onChange}
							></textarea>
							<br/>
							<button>Submit Treat</button>
						</fieldset>
					</form>
				</div>
			</React.Fragment>
		)
	}
}


