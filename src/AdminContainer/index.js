import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

export default class AdminContainer extends Component {
	constructor(props){
		super()
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
							<Login changeState={this.props.changeState}/>
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
	console.log(props.changeState);
  return <LoginContainer changeState={props}/>

}

function Create() {
  return <h2>Create</h2>;
}

