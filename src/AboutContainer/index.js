import React from 'react'
import './index.css'

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
		</React.Fragment>
	)
}