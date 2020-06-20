import React from 'react'
import './index.css'
import {Button} from 'semantic-ui-react'
export default function UserInfoContainer(){
	return(
		<React.Fragment>
			<div className='form-container'>
				<form class="ui form">
				  <h4 class="ui dividing header">Shipping Information</h4>
				  <div class="field">
				    <label>Name</label>
				    <div class="two fields">
				      <div class="field">
				        <input type="text" name="firstName" placeholder="First Name"/>
				      </div>
				      <div class="field">
				        <input type="text" name="lastName" placeholder="Last Name"/>
				      </div>
				    </div>
				  </div>
				  <div class="field">
				    <label>Shipping Address</label>
				    <div class="fields">
				      <div class="twelve wide field">
				        <input type="text" name="shippingaddress" placeholder="Street Address"/>
				      </div>
				      <div class="four wide field">
				        <input type="text" name="shippingaddress2" placeholder="Apt #"/>
				      </div>
				    </div>
				  </div>
				  <div class="two fields">
				    <div class="field">
				      <label>State</label>
				      <select class="ui fluid dropdown">
				        <option value="">State</option>
				    <option value="AL">Alabama</option>
				    <option value="AK">Alaska</option>
				    <option value="AZ">Arizona</option>
				    <option value="AR">Arkansas</option>
				    <option value="CA">California</option>
				    <option value="CO">Colorado</option>
				    <option value="CT">Connecticut</option>
				    <option value="DE">Delaware</option>
				    <option value="DC">District Of Columbia</option>
				    <option value="FL">Florida</option>
				    <option value="GA">Georgia</option>
				    <option value="HI">Hawaii</option>
				    <option value="ID">Idaho</option>
				    <option value="IL">Illinois</option>
				    <option value="IN">Indiana</option>
				    <option value="IA">Iowa</option>
				    <option value="KS">Kansas</option>
				    <option value="KY">Kentucky</option>
				    <option value="LA">Louisiana</option>
				    <option value="ME">Maine</option>
				    <option value="MD">Maryland</option>
				    <option value="MA">Massachusetts</option>
				    <option value="MI">Michigan</option>
				    <option value="MN">Minnesota</option>
				    <option value="MS">Mississippi</option>
				    <option value="MO">Missouri</option>
				    <option value="MT">Montana</option>
				    <option value="NE">Nebraska</option>
				    <option value="NV">Nevada</option>
				    <option value="NH">New Hampshire</option>
				    <option value="NJ">New Jersey</option>
				    <option value="NM">New Mexico</option>
				    <option value="NY">New York</option>
				    <option value="NC">North Carolina</option>
				    <option value="ND">North Dakota</option>
				    <option value="OH">Ohio</option>
				    <option value="OK">Oklahoma</option>
				    <option value="OR">Oregon</option>
				    <option value="PA">Pennsylvania</option>
				    <option value="RI">Rhode Island</option>
				    <option value="SC">South Carolina</option>
				    <option value="SD">South Dakota</option>
				    <option value="TN">Tennessee</option>
				    <option value="TX">Texas</option>
				    <option value="UT">Utah</option>
				    <option value="VT">Vermont</option>
				    <option value="VA">Virginia</option>
				    <option value="WA">Washington</option>
				    <option value="WV">West Virginia</option>
				    <option value="WI">Wisconsin</option>
				    <option value="WY">Wyoming</option>
				      </select>
				    </div>
				    <div class="field">
				      <label>Zip</label>
				        <input type="text" name="zip" placeholder='Zip' pattern="[0-9]{5}"/>
				     </div>
				  </div>
				  <div class="field">
				    <label>City</label>
				      <input type="text" name="city" placeholder='City' />
				  </div>
				  <h4 class="ui dividing header">Payment Information</h4>
				  <div class="field">
				    <label>Email</label>
				      <input type="email" name="email" placeholder='Email'/>
				   </div>
				  <div class="fields">
				    <div class="seven wide field">
				      <label>Phone Number(Optional)</label>
				      <input type="tel" name="phoneNumer" patter='[0-9]{3}-[0-9]{3}-[0-9]{4}' required placeholder="Phone #"/>
				    </div>
				    <div class="six wide field">
				      <label>Cash App or Venmo Id</label>
				        <div class="field">
				      		<input type="text" name="paymentId" placeholder="Id Name"/>
				        </div>
				   	 </div>
				  </div>
				   <h4 class="ui dividing header">Receipt(Optional)</h4>
				   <div class="field">
				    <label>Send Receipt To:</label>
				    <div class="field">
				      <input type="email" name="receipt" placeholder='Email for additional receipt'/>
				    </div>
				  </div>
				  <div id='order-button' class="ui button" tabindex="0">Submit Order</div>
				</form>
			</div>
			<div className='payment-info-container'>
				<p className='payment-details'>
					When you hit submit you will recieve an 
					email confirmation detailing your order. 
					<strong>Please allow 24 hours for an update on your order.</strong>
					Thank you and have a blessed day!
				</p>
			</div>
		</React.Fragment>
	)
}

