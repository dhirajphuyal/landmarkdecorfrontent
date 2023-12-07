import React from 'react'
import './ContactUs.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ContactUs () {
	return (
		<div className='ContactUs_ContactUs'>
			<span className='ContactUs_1'>Contact Us</span>
			<img className='Rectangle31' src = {ImgAsset.ContactUs_Rectangle31} />
			<span className='PLEASESHAREANYINFORMATIONORINSPIRATIONYOUHAVEFORYOURDREAMEVENT'><br/>PLEASE SHARE ANY INFORMATION OR INSPIRATION YOU HAVE FOR YOUR DREAM EVENT!*</span>
			<span className='EstimatedHeadcounts'>Estimated Headcounts</span>
			<span className='WheredoyouReside'>Where do you Reside</span>
			<span className='EventLocation'>Event Location</span>
			<span className='EventType'>Event Type</span>
			<span className='EventDate'>Event Date</span>
			<span className='Name'>Name  </span>
			<span className='Email'>Email </span>
			<span className='Phone'>Phone</span>
			<img className='Line6' src = {ImgAsset.ContactUs_Line6} />
			<img className='Line9' src = {ImgAsset.ContactUs_Line9} />
			<img className='Line12' src = {ImgAsset.ContactUs_Line12} />
			<img className='Line13' src = {ImgAsset.ContactUs_Line13} />
			<img className='Line10' src = {ImgAsset.ContactUs_Line10} />
			<img className='Line11' src = {ImgAsset.ContactUs_Line11} />
			<img className='Line7' src = {ImgAsset.ContactUs_Line7} />
			<img className='Line8' src = {ImgAsset.ContactUs_Line8} />
			<div className='Rectangle32'/>
			<span className='WecantwaittohearfromyouWearecurrentlyacceptingclientsforfullserviceplanninglaurenafoxeventcom84373200061304ErckmannDriveSuiteBMountPleasantSC29464'>We can’t wait to hear from you!<br/><br/>We are currently accepting clients for full-service planning<br/><br/>lauren@afoxevent.com / <br/><br/>843.732.00061304 <br/><br/>Erckmann Drive, Suite BMount Pleasant, SC 29464</span>
			<span className='Submit'>Submit</span>
			<Link to='/menu'>
				<img className='Vector' src = {ImgAsset.ContactUs_Vector} />
			</Link>
		</div>
	)
}