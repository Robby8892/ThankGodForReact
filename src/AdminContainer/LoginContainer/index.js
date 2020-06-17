import React, { Component } from 'react'

export default class LoginContainer extends Component {
	constructor(props){
		props.changeState.changeState()
		super()

	}


	render(){
		return(
			<React.Fragment>
				<div id='login-container'>
					<form id='login-form'>
						<fieldset>
							<legend>Login Here</legend>
							<label for="loginName"></label>
							<input id='loginName' type="text" name="username" placeholder="Enter your login name"/>
							<label for="password"></label>
							<input id='password' type="password" name="password" placeholder="Enter your password"/>
							<button>Login</button>
						</fieldset>
					</form>
				</div>
			</React.Fragment>

		)
	}
}
