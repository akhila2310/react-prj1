import React from 'react'
import './Banner.css'
import BannerImage from '../../Assets/images/HeaderImage 1 (2).png'

function Banner() {

  return (
    <div>
      <div className="banner">
        <div className="bannerleft">
    <div className="bannerleft1">Branding | Image making</div>
    <div className="bannerleft2">Visual Designer</div>
    <div className="bannerleft3">This is a Figma design file.turned into code using Anima learn more at AnimaApp.com</div>
   
        <button type="Contact">Contact</button></div>
    
    
    <div class="bannerimage">
        <img src={BannerImage} alt="bannerimage" width="400" height="300" /></div>
        
    </div>
    </div>
  )
}

export default Banner
