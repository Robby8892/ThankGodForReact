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
			<img className='founder-img' src={founderImg} alt={'the founder of thank god for raw and vegan treats'}/>
			<p className='mission-statement'>
				<strong>My Mission</strong>: To create plantbase treats that inspire, empower, enlightened, and encourage individuals to live healthier, happier lives.
			</p>
			<h3 className='testimony'>Testimony</h3>
			<span className='testimony-container'>
				<p className='testimony-item'>
					In October 2000, Senior yr. of College, I took 21 credits hours in one semester. I worked as a License Hairstylist, with two children.
				</p>
				<p className='testimony-item'>
					That's the month I began to feel heavy cramps in my abdominal area, I didn't understand what was happening to me, I tried every remedy and holistic healing 
					that I could afford and was aware of. 
				</p>
				<p className='testimony-item'>
					I visited a physician when my bowels became bloody, uncontrollable, and I experienced excessive amounts of weight loss. 
					It was hurtful to hear that out of nowhere, no family history in my genetics that I researched, I had colitis, Chrohns disease something that I had never even heard of. At that time, African Americans did not possess this illness almost at all.
				</p>
				<p className='testimony-item'>
					I was blessed to find one of the best GI's, Dr. Markye, who assisted me with this disease for 12 yrs. He taught me through diet that I would be able to control this debilitating disease. I fought for 12 long years to keep this disease at bay.
				</p>
				<p className='testimony-item'>
					Becoming a Licensed Massage Therapist, Certified Personal trainer and now receiving Master's in Nutrition was motivated by my need to find out enough data to collect and create a formula to heal myself and assist individuals who are apart of the IBS and Colitis Family.
				</p>
				<p className='testimony-item'>
					In 2015 I was on 26 prescribed pills to combat the disease and receiving intravenous injections every 
					6 weeks in an infusion lab. God Blessed me to meet a fitness instructor in 2015 Trinia Yvette, and my life changed forever. 
				</p>
				<p className='testimony-item'>
					Trinia took my daughter and I step by step through the Raw Vegan detox diet. We began the journey with nutrition. My life took a radical turn from there. I Learned how to see & smell nature, build a better a better relationship with my daughter, worked on my inner being, learned how to cook entirely different from my ancestors and got off all medication. 
				</p>
				<p className='testimony-item'>
					I mastered my craft in healthy cooking in eating. I mastered my newly invented Thank God 4 Raw & Vegan Treats. I'm becoming a Dietian to help people in a way that's never been done.
				</p>
				<p className='testimony-item'>
					The Pscholigical effect of eating & disorders, the way to heal your body, mind and soul through healthy eating. 
				</p>				
			</span>
		</React.Fragment>
	)
}