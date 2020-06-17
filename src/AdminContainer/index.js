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
				admin: false,
				adminName: '',
				adminId: '',
				errorMsg: ''
			}
		}
		
		loginAdmin = async (loginInfo) => {
			try{
				console.log('here is loginInfo', loginInfo);
				const loginResponse = await axios.post(process.env.REACT_APP_API_URI + '/admin/login', {
					data: loginInfo
				})
				.then(res => {
					if(res.data.status === 200){
						this.setState({
							admin: true,
							adminName: res.data.loginName,
							adminId: res.data.adminId,
							errorMsg: ''
						})
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
							admin={this.state.admin}
							errorMsg={this.state.errorMsg}
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

  return props.admin ? null 
  			: 
  			<LoginContainer 
  			errorMsg={props.errorMsg}
  			changeState={props.changeState}
  			loginAdmin={props.loginAdmin}
  			/>

}

function Create() {
  return <h2>Create</h2>;
}

