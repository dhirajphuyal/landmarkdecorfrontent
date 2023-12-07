import React from 'react'
import {Link} from 'react-router-dom'
export default function __HomePage__ () {
    return (
	<div>
		<Link to='/Menu'><div>Menu</div></Link>
		<Link to='/HomePage'><div>HomePage</div></Link>
		<Link to='/AboutPage'><div>AboutPage</div></Link>
		<Link to='/Events'><div>Events</div></Link>
		<Link to='/Events_1'><div>Events_1</div></Link>
		<Link to='/Themes'><div>Themes</div></Link>
		<Link to='/Gallery'><div>Gallery</div></Link>
		<Link to='/MehendiDesign'><div>MehendiDesign</div></Link>
		<Link to='/MehendiDesign_1'><div>MehendiDesign_1</div></Link>
		<Link to='/ContactUs'><div>ContactUs</div></Link>
	</div>
	)
}