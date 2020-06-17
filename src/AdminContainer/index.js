import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import TreatContainer from './TreatContainer'
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

export default class AdminContainer extends Component {
	constructor(props){
		super()
			this.state = {
				admin: false,
				adminName: '',
				adminId: '',
				errorMsg: '',
				createTreat: false,
				message: ''
			}
		}
		
	loginAdmin = async (loginInfo) => {
		try{
			const loginResponse = await axios.post(process.env.REACT_APP_API_URI + 'admin/login', {
				data: loginInfo
			})
			.then(res => {
				if(res.data.status === 200){
					this.setState({
						admin: true,
						adminName: res.data.loginName,
						adminId: res.data.adminId,
						createTreat: true,
						errorMsg: ''
					})
					this.updateUrl()
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

	createTreat = async (treatInfo) => {
		try{
			// I have to create two api calls for creation so that I can have file data, and price, and name data
			let formData = new FormData()
			formData.append('imgOfTreat', treatInfo.imgOfTreat)
			formData.append('name', treatInfo.name)
			formData.append('price', treatInfo.price)
			formData.append('description', treatInfo.description)


			const createdTreatResponse = await axios.post(process.env.REACT_APP_API_URI + 'treat/new', formData)
				.then(res => {
					if(res.data.status === 200){
					console.log(res.data, 'here is the created treat');
					this.setState({message: 'You have created a new treat. Go to the main site to see how it looks!'})
				} else {
					this.setState({
						errorMsg: 'That treat already exists on the site.'
					})
				}
			})

		}catch(error){
			console.log(error);
		}
	}


	// I will need to learn more router and redirect to do this effecitvely 
	updateUrl = () => {
		this.setState({
			redirect: '/controlpanel/create/treat/admin'
		})

		if(this.state.redirect){
			return <Redirect to={this.state.redirect}/>
		}
	}


	render(){
		return(
			<React.Fragment>
				<RouterComp
				admin={this.state.admin}
				errorMsg={this.state.errorMsg}
				loginAdmin={this.loginAdmin}
				changeState={this.props.changeState}
				createTreat={this.state.createTreat}
				redirect={this.state.redirect}
				createTreatCall={this.createTreat}
				message={this.state.message}
				/>
			</React.Fragment>
		)
	}
}

function RouterComp(props) {
	return(
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to ='/controlpanel/login/_admin'></Link>
						</li>
							{props.admin ? <Link to ='/controlpanel/create/treat/admin'>Create A Treat</Link> : null}
						<li>
							
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path='/controlpanel/login/admin'>
						<Login 
						admin={props.admin}
						errorMsg={props.errorMsg}
						loginAdmin={props.loginAdmin}
						changeState={props.changeState}
						/>
					</Route>
					<Route path='/controlpanel/create/treat/admin'>
						<Create
							createTreat={props.createTreat}
							changeState={props.changeState}
							admin={props.admin}
							createTreatCall={props.createTreatCall}
							message={props.message}
							errorMsg={props.errorMsg}
							/>
					</Route>
				</Switch>
			</div>
		</Router>
	)
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


function Create(props) {
	console.log(props.createTreat);
	if(!props.createTreat){
		props.changeState()
		
		return(
			<React.Fragment>
				<h1>404 Error</h1>
				<p>You are trying to access a page you do not have acces to</p>
			</React.Fragment>	
			)
	} else {
		
		return(<TreatContainer
					changeState={props.changeState}
					createTreatCall={props.createTreatCall}
					message={props.message}
					errorMsg={props.errorMsg}
					/> 
		)
	}
}
