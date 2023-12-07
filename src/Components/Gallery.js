import React from 'react'
import './Gallery.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Gallery () {
	return (
		<div className='Gallery_Gallery'>
			<img className='_1a11' src = {ImgAsset.Events__1a11} />
			<span className='Gallery_1'>Gallery</span>
			<img className='images1' src = {ImgAsset.Gallery_images1} />
			<img className='_61NzrHSpkXL1' src = {ImgAsset.Gallery__61NzrHSpkXL1} />
			<img className='OgX67nvm94OE4EtscftxNbeJcMJVcDkgNJqdX16h1' src = {ImgAsset.Gallery_OgX67nvm94OE4EtscftxNbeJcMJVcDkgNJqdX16h1} />
			<img className='weddingdecorheadtable21' src = {ImgAsset.Gallery_weddingdecorheadtable21} />
			<img className='BACHELORPARTYATTERRACE21' src = {ImgAsset.Gallery_BACHELORPARTYATTERRACE21} />
			<img className='images11' src = {ImgAsset.Gallery_images11} />
			<img className='_0363e89b9309b015b579a3bd30864f04oj9micet7nvy4rttply0c9wl8a2r4ity3o1vntpj1c1' src = {ImgAsset.Gallery__0363e89b9309b015b579a3bd30864f04oj9micet7nvy4rttply0c9wl8a2r4ity3o1vntpj1c1} />
			<img className='evelinafrimanhw_sKmjb0nsunsplash2' src = {ImgAsset.AboutPage_evelinafrimanhw_sKmjb0nsunsplash1} />
			<Link to='/menu'>
				<img className='Vector' src = {ImgAsset.Gallery_Vector} />
			</Link>
		</div>
	)
}