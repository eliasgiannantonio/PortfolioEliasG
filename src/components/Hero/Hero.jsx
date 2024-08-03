import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <div id='inicio' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Soy Elias Giannantonio,</span> desarrollador web.</h1>
      <p>Desarrollador web apasionado y creativo en busca de nuevos desafíos. Bienvenido a mi portfolio.</p>
      <div className="hero-action">
        <Link to='contacto' smooth={true} spy={true} offset={-20} duration={500} className='hero-connect-link' href='#contacto'>
          <div className="hero-connect">
            <p onClick={() => setMenu("contacto")}>Conecta conmigo</p>
          </div>
        </Link>
        <a className="hero-curriculum-link" target="_blank" href='https://drive.google.com/file/d/1PrZV9HPoN9FbOtwdAqolhP9eukdoiZJ3/view?usp=sharing'>
          <div className="hero-curriculum">Mi currículum</div>
        </a>
      </div>
    </div>
  )
}

export default Hero