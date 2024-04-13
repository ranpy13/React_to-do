import React from 'react'
import './Program.css'
import program1 from '../../assets/edusity_assets/program-1.png'
import program2 from '../../assets/edusity_assets/program-2.png'
import program3 from '../../assets/edusity_assets/program-3.png'
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program1} alt=""/>
        <div className="caption">
         <img src={program_icon_1} alt="" />
         <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt=""/>
        <div className="caption">
         <img src={program_icon_2} alt="" />
         <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt=""/>
        <div className="caption">
         <img src={program_icon_3} alt="" />
         <p>Post Graduation</p>
        </div>
      </div>
      
    </div>
  )
}

export default Programs
