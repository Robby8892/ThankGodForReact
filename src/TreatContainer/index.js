import React, { Component } from 'react'
import axios from 'axios'
import ListOfTreatsContainer from './ListOfTreatsContainer'

export default class TreatContainer extends Component {
	constructor(props){
		super()
		this.state = {
			treats: []
		}
	}
	getTreats = async () => {

		const treatsResponse = await axios.get(process.env.REACT_APP_API_URI + 'treat')


		if(treatsResponse.status === 200){
			console.log(treatsResponse, 'here are my treats');
			this.setState({
				treats:  treatsResponse.data.data
			})
		} else {
			console.log('there was an error with call, contact developer.');
		}
	
	}
	componentDidMount(){
		this.getTreats()
	}

	render(){
		return(
			<React.Fragment>
				<ListOfTreatsContainer
					treats={this.state.treats}
					updateCart={this.props.updateCart}
					onClick={this.props.onClick}
				/>
			</React.Fragment>
		)
	}
}