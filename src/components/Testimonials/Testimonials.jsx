import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'
const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'></img>
      <img src={back_icon} alt="" className='next-btn'></img> 
      <div className="slider"></div>
    </div>
  )
}

export default Testimonials
