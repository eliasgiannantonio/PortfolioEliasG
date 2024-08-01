import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

function Hero() {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Soy Elias Giannantonio,</span> desarrollador web.</h1>
        <p>Desarrollador web apasionado y creativo en busca de nuevos desafíos. Bienvenido a mi portfolio.</p>
        <div className="hero-action">
            <div className="hero-connect">Conecta conmigo</div>
            <div className="hero-curriculum">Mi currículum</div>
        </div>
    </div>
  )
}

export default Hero