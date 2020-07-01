import React, { Component } from 'react'
import axios from 'axios'
import ListOfTreatsContainer from './ListOfTreatsContainer'
import ReactPaginate from 'react-paginate'
import './index.css'

export default class TreatContainer extends Component {
	constructor(props){
		super()
		this.state = {
			data: [],
			quantity: 0,
			offset: 0,
			perPage: 6,
			currentPage: 0,
			treats: []
		}
	}

	// updateQuantity = 


	getTreats = () => {

		const treatsResponse = axios.get(process.env.REACT_APP_API_URI + 'treat')
			.then( res => {
				console.log(res);
				if(res.status === 200) {
					console.log(res.data.data, 'here is the data');
					const data = res.data.data
					const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
					const postData = slice.map(({_id, price, name, imgOfTreat, description}) => {
						return(
							<div className='img-container' key={_id}>
								<img className='image' src={process.env.REACT_APP_API_URI + `image/treat/${_id}`} alt={name}/>
								<h3 className='name-of-treat'>{name}</h3>
								<p className='description'>{description}</p>
								<span className='price'>${price}</span>
								<div className='quantity-container'>
								<select onBlur={this.props.onBlur} className='quantity'>
									<option value='1'>one</option>
									<option value='2'>two</option>
									<option value='3'>three</option>
									<option value='4'>four</option>
									<option value='5'>five</option>
									<option value='6'>six</option>
									<option value='7'>seven</option>
									<option value='8'>eight</option>
									<option value='9'>nine</option>
									<option value='10'>ten</option>
								</select>
								</div>
								<button 
									onClick={() => this.props.updateCart(_id)} 
									className='order-button'>
									Order
								</button>
							</div>

						)
					})

					this.setState({
						pageCount: Math.ceil(data.length / this.state.perPage),

						postData
					})
				} else {
					console.log('there was an error with call, contact developer.');
				}
			})

			if(treatsResponse.status === 200){
				console.log(treatsResponse, 'here are my treats');
				this.setState({
					treats:  treatsResponse.data.data
				})
			} else {
				console.log('there was an error with call, contact developer.');
			}

		}

		handlePageClick = e => {
			const selectedPage = e.selectedPage 
			const offset = selectedPage * this.state.perPage

			this.setState({
				currentPage: selectedPage,
				offset: offset
			}, () => {
				this.getTreats()
			})
		}
	
	componentDidMount(){
		this.getTreats()
	}

	mouseUp = e => {
		this.props.updateQuantity(e.target.value)
	}


	render(){
		console.log('this.state.postData', this.state.postData);
		return(
			<React.Fragment>
				{this.state.postData}

				<ListOfTreatsContainer
					treats={this.state.treats}
					updateCart={this.props.updateCart}
					onClick={this.props.onClick}
					mouseUp={this.mouseUp}
					quantity={this.state.quantity}
					onChangeValue={this.props.onChangeValue}
					quantity={this.props.quantity}
				/>
				<ReactPaginate
					previousLabel={"prev"}
					nextLabel={"next"}
					breakLabel={"..."}
					breakClassName={"break-me"}
					pageCount={this.state.pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={"pagination"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"}
				/>
			</React.Fragment>
		)
	}
}