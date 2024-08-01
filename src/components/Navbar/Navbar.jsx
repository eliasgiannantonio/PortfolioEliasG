import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Inicio</li>
            <li>Sobre mi</li>
            <li>Portfolio</li>
            <li>Contacto</li>
        </ul>
        <div className="nav-connect">
            Conecta conmigo
        </div>
    </div>
  )
}

export default Navbar