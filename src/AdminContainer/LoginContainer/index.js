import React, { Component } from 'react'

export default class LoginContainer extends Component {
	constructor(props){
		props.changeState.changeState()
		super()

	}


	render(){
		return(
			<div>
				LoginContainer
			</div>
		)
	}
}