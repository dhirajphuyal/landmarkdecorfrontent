import React from 'react'
import './Events.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Events () {
	return (
		<div className='Events_Events'>
			<img className='_1a11' src = {ImgAsset.Events__1a11} />
			<span className='Events_1'>Events</span>
			<span className='Mehendifunction'>Mehendi function</span>
			<span className='ReceptionDecorations'>Reception Decorations</span>
			<span className='ReceptionDecorations_1'>Reception Decorations</span>
			<span className='BachelorsParty'>Bachelor’s Party </span>
			<span className='WeddingDecorations'>Wedding Decorations</span>
			<span className='WeaningCeremony'>Weaning Ceremony</span>
			<span className='BabyShowerDecors'>Baby Shower Decors</span>
			<span className='TraditionalMehendidecorYellowThemedesign'>Traditional Mehendi decor - Yellow Theme design</span>
			<span className='TraditionalMehendidecorYellowThemedesign_1'>Traditional Mehendi decor - Yellow Theme design</span>
			<span className='TraditionalMehendidecorYellowThemedesign_2'>Traditional Mehendi decor - Yellow Theme design</span>
			<span className='TraditionalMehendidecorYellowThemedesign_3'>Traditional Mehendi decor - Yellow Theme design</span>
			<span className='TraditionalWeaningdecorEVerthingyouneedforbaby'>Traditional Weaning decor - EVerthing you need for baby</span>
			<span className='EverykindofBabyShowerThemed'>Every kind of Baby Shower Themed </span>
			<img className='images1' src = {ImgAsset.Gallery_images1} />
			<img className='_61NzrHSpkXL1' src = {ImgAsset.Gallery__61NzrHSpkXL1} />
			<img className='OgX67nvm94OE4EtscftxNbeJcMJVcDkgNJqdX16h1' src = {ImgAsset.Gallery_OgX67nvm94OE4EtscftxNbeJcMJVcDkgNJqdX16h1} />
			<img className='weddingdecorheadtable21' src = {ImgAsset.Gallery_weddingdecorheadtable21} />
			<img className='BACHELORPARTYATTERRACE21' src = {ImgAsset.Gallery_BACHELORPARTYATTERRACE21} />
			<Link to='/events_1'>
				<span className='SeeMore'>See More></span>
			</Link>
			<Link to='/menu'>
				<img className='Vector' src = {ImgAsset.Events_Vector} />
			</Link>
		</div>
	)
}