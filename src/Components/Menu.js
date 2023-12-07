import React from 'react'
import './Menu.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Menu () {
	return (
		<div className='Menu_Menu'>
			<img className='photosbylantyO38Id_cyV4Munsplash1' src = {ImgAsset.Menu_photosbylantyO38Id_cyV4Munsplash1} />
			<span className='AnExperiencetoRemember'>An Experience to Remember</span>
			<span className='MENU'>MENU</span>
			<span className='LandMarkDecor'>LandMark.Decor</span>
			<span className='Soifyoulikelivinginthemomentandgoingallcrazywithpartieswhynottakethefunandexcitementonline'>So, if you like living in the moment and going all crazy with parties,<br/><br/> why not take the fun and excitement online?</span>
			<span className='LandMarkDecorEventsisafullserviceplanninganddesignSiteWhetheryourstyleisbreathtakinglyboldexquisitelyelegantorcharminglychicourtalentedteamwillcarefullycurateeveryelementofyourvisiontomakesureitshinesasbrightlyasyouWedontbelieveinburnandturnwhichiswhyatLandMarkDecorweworktogetherwithourcouplestocreateandexecuteacustomandstunningvision'>LandMark.Decor Events is a full-service planning and design<br/>Site. Whether your style is breathtakingly bold, exquisitely elegant, or charmingly chic, our talented team will carefully curate every element of your vision to make sure it shines as brightly as you. We don’t believe in burn and turn, which is why at LandMark.Decor, we work together with our couples to create and execute a custom and stunning vision.</span>
			<div className='Rectangle29'/>
			<Link to='/aboutpage'>
				<span className='About'>About</span>
			</Link>
			<Link to='/events'>
				<span className='Events'>Events</span>
			</Link>
			<Link to='/themes'>
				<span className='Theme'>Theme</span>
			</Link>
			<span className='Gallery'>Gallery</span>
			<Link to='/contactus'>
				<span className='Connect'>Connect</span>
			</Link>
			<span className='LandMarkDecor_1'>LandMark.Decor</span>
			<img className='thomaswilliamQ3PzwHKpEdcunsplash1' src = {ImgAsset.AboutPage_thomaswilliamQ3PzwHKpEdcunsplash2} />
			<span className='BabyShowerofMrsSonalu'>Baby Shower of Mrs. Sonalu</span>
			<img className='jonathanborbaB_R3rmJPeSEunsplash1' src = {ImgAsset.HomePage_jonathanborbaB_R3rmJPeSEunsplash1} />
			<span className='RahulandRehenaswedding'>Rahul and Rehena’s wedding</span>
			<img className='Vector' src = {ImgAsset.Menu_Vector} />
		</div>
	)
}