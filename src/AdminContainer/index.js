import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

export default class AdminContainer extends Component {
	constructor(props){
		super()
			this.state = {
				admin: Boolean,
				adminName: String,
				admingId: String,
				errorMsg: String
			}
		}
		
		loginAdmin = async (loginInfo) => {
			try{
				const loginResponse = await axios.post(process.env.REACT_APP_API_URI + '/admin/login', {
					data: loginInfo
				})
				.then(res => {
					if(res.data.status === 200){
						console.log(loginResponse);
					} else {
						this.setState({
							errorMsg: 'Invalid credentials.'
						})
					}
				})
			}catch(error){
				console.log(error);
			}
	}
	render(){
		return(
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to ='/controlpanel/login/_admin'></Link>
							</li>
								<Link to ='/create'></Link>
							<li>
								
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path='/controlpanel/login/admin'>
							<Login 
							loginAdmin={this.loginAdmin}
							changeState={this.props.changeState}/>
						</Route>
						<Route path='/create'>
							<Create/>
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

function Login(props) {

  return <LoginContainer 
  			changeState={props.changeState}
  			loginAdmin={props.loginAdmin}
  			/>

}

function Create() {
  return <h2>Create</h2>;
}

