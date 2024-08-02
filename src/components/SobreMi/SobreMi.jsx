import React from 'react'
import './SobreMi.css'
import about_profile from '../../assets/about_profile.jpg'

const SobreMi = () => {
  return (
    <div id='sobremi' className='about'>
        <div className="about-title">
            <h1>Sobre mi</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Recientemente me gradué de técnico superior en desarrollo web y aplicaciones digitales. A lo largo de mi trayectoria y formación he desarrollado habilidades en el uso de tecnologías como React, Tailwind, Django, MySQL, HTML, CSS y JavaScript.</p>
                    <p>Estoy preparado para enfrentar desafíos en el mundo del desarrollo web.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p> <hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>MySQL</p> <hr style={{width:"30%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SobreMi