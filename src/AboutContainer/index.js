import React from 'react'
import './index.css'

import founderImg from '../photos/founder.png'

export default function AboutContainer(){
	return(
		<React.Fragment>
			<h2 className='about-me-header'>About Me</h2>
			<ul className='about-me-container'>
				<li className='about-me-item'>
					Bachelors of Communications/Performing Arts
				</li>
					Licensed Cosmetologist
				<li className='about-me-item'>
				</li>
				<li className='about-me-item'>
					Licensed Massage Therapist
				</li>
				<li className='about-me-item'>
					NCTMB Founder; Thank God For Hands Like Yours
				</li>
				<li className='about-me-item'>
					Cert PT/Group/Aqua Fitness Instructor, NASM
				</li>
				<li className='about-me-item'>
					Founder & CEO; We're In This Together Fitness, LLC
				</li>
			</ul>

			<h3 className='founder-header'>Founder</h3>
			<h3 className='founder-header'>Michelle Scott</h3>
			<img className='founder-img' src={founderImg} alt={'the image of the founder of thank god for raw and vegan treats'}/>
			<p className='mission-statement'>
				<strong>My Mission</strong>: To create plantbase treats that inspire, empower, enlightened, and encourage individuals to live healthier, happier lives.
			</p>
		</React.Fragment>
	)
}