import React from 'react'
import facebookLogo from '../photos/App Logo Inspiraton 42.png'
import instagramLogo from '../photos/Icon.png'
import cashappLogo from '../photos/Cash App 1.png'
import venmoLogo from '../photos/venmologo.png'
import cinRoll from '../photos/Cinnamon Rolls.png'
import glazCinDo from '../photos/Glazed Cinnamon Donuts.png'
import twoToDo from '../photos/Two Tone Donut.png'

import { Zoom } from 'react-slideshow-image'

const images = [
  cinRoll,
  glazCinDo,
  twoToDo
]

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

function onClick(){
	console.log('you clicked');
}

export default function homeContainer(){
	return(
		<div>
		 <div className="slide-container">
		  <Zoom {...zoomOutProperties}>
		    {
		      images.map((each, index) => <img  key={index} style={{width: "100%"}} src={each} />)
		    }
		  </Zoom>
		</div>
		 <p className='contact'>Contact Me</p>
		 <p className='phone'>Phone: (773) 879-4208</p>
		 <p className='email'>Email: chelly67mom@yahoo.com</p>
		 <div className='links-container'>
		 	<a href={'https://www.instagram.com/thankgod4rawvegantreats_/'} target="_blank">
			   <img className='instagram' src={instagramLogo} alt={'instagram logo'}/>
			</a>
			<a href={'https://www.facebook.com/Michelle-Scott-CEO-197474354500232'} target="_blank">
			   <img onClick={onClick} className='facebook' src={facebookLogo} alt={'facebook logo'}/>
			</a>
		 </div>
		 <p className='payment-options'>We Accept:</p>
		 <div className='pay-options-container'>
			 <img className='cashapp' src={cashappLogo} alt={'cashapp logo'}/>
			 <img className='venmo' src={venmoLogo} alt={'venmo logo'}/>
		 </div>

		 <div className='review-container'>
		   <ul className='reviews'>
		     <p className='review-item'>“Michelle it was the best cake ever, we ate the whole thing!”</p>
		     <p className='review-item'>“#blackgirlmagic!”</p>
		     <p className='review-item'>“We couldnt stop eating it literally.”</p>
		   </ul>  
		   </div>
		  </div> 
	)
}