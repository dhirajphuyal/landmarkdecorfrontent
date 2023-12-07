import React from 'react'
import './HomePage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function HomePage () {
	return (
		<div className='HomePage_HomePage'>
			<div className='carbonskipbackfilled'>
			</div>
			<img className='photosbylantyO38Id_cyV4Munsplash1' src = {ImgAsset.Menu_photosbylantyO38Id_cyV4Munsplash1} />
			<Link to='/menu'>
				<span className='MENU'>MENU</span>
			</Link>
			<span className='LandMarkDecor'>LandMark.Decor</span>
			<span className='Soifyoulikelivinginthemomentandgoingallcrazywithpartieswhynottakethefunandexcitementonline'>So, if you like living in the moment and going all crazy with parties,<br/><br/> why not take the fun and excitement online?</span>
			<span className='LandMarkDecorEventsisafullserviceplanninganddesignSiteWhetheryourstyleisbreathtakinglyboldexquisitelyelegantorcharminglychicourtalentedteamwillcarefullycurateeveryelementofyourvisiontomakesureitshinesasbrightlyasyouWedontbelieveinburnandturnwhichiswhyatLandMarkDecorweworktogetherwithourcouplestocreateandexecuteacustomandstunningvision'>LandMark.Decor Events is a full-service planning and design<br/>Site. Whether your style is breathtakingly bold, exquisitely elegant, or charmingly chic, our talented team will carefully curate every element of your vision to make sure it shines as brightly as you. We don’t believe in burn and turn, which is why at LandMark.Decor, we work together with our couples to create and execute a custom and stunning vision.</span>
			<img className='thomaswilliamQ3PzwHKpEdcunsplash1' src = {ImgAsset.AboutPage_thomaswilliamQ3PzwHKpEdcunsplash2} />
			<span className='BabyShowerofMrsSonalu'>Baby Shower of Mrs. Sonalu</span>
			<img className='jonathanborbaB_R3rmJPeSEunsplash1' src = {ImgAsset.HomePage_jonathanborbaB_R3rmJPeSEunsplash1} />
			<span className='RahulandRehenaswedding'>Rahul and Rehena’s wedding</span>
			<span className='AnExperiencetoRemember'>An Experience to Remember</span>
		</div>
	)
}