import React, { Component } from 'react'

export default class LoginContainer extends Component {
	constructor(props){
		console.log(props);
		props.changeState()
		super()
		this.state = {
			adminName: String,
			adminId: String,
		}
	}
		onSubmit = e => {
			e.preventDefault()
			this.props.loginAdmin(this.state)
		}


	render(){
		return(
			<React.Fragment>
				<div id='login-'>
					<form id='login-form' onSubmit={this.onSubmit}>
						<fieldset>
							<legend>Login Here</legend>
							<label htmlFor="loginName"></label>
							<input id='loginName' type="text" name="username" placeholder="Enter your login name"/>
							<label htmlFor="password"></label>
							<input id='password' type="password" name="password" placeholder="Enter your password"/>
							<button>Login</button>
						</fieldset>
					</form>
				</div>
			</React.Fragment>
		)
	}
}
