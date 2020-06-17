import React, { Component } from 'react'

export default class LoginContainer extends Component {
	constructor(props){
		props.changeState()
		super()
		this.state = {
			loginName: '',
			password: ''
		}
	}
		onSubmit = e => {
			e.preventDefault()
			this.props.loginAdmin(this.state)
		}

		onChange = e => {
			this.setState({
				[e.target.name]: e.target.value
			})
		}

		clearForm = () => {
			this.setState({
				loginName: '',
				password: ''
			})
		}

		componentDidMount() {
			this.clearForm()
		}

	render(){
		console.log(this.state);
		return(
			<React.Fragment>
				<div id='login-'>
					<form id='login-form' onSubmit={this.onSubmit}>
						<fieldset>
							<legend>Login Here</legend>
							<label htmlFor="loginName"></label>
							<input 
								id='loginName' 
								type="text" 
								name="loginName" 
								placeholder="Enter your login name"
								value={this.state.loginName}
								onChange={this.onChange}
								/>
							<label htmlFor="password"></label>
							<input 
								id='password' 
								type="password" 
								name="password" 
								placeholder="Enter your password"
								value={this.state.password}
								onChange={this.onChange}
								/>
							<button>Login</button>
						</fieldset>
					</form>
				</div>
			</React.Fragment>
		)
	}
}
