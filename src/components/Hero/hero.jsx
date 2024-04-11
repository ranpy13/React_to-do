import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world!!!</h1>
        <p>Our cuttind-edge currriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education !</p>
        <button className='btn'>Explore Us <img src={dark_arrow} alt=""></img> </button>
      </div>


      
    </div>
  )
}

export default Hero
