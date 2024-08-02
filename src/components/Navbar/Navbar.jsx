import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-scroll'


function Navbar() {

  const [menu, setMenu] = useState("inicio");

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <Link to='inicio' smooth={true} spy={true} offset={50} duration={500} className='anchor-link' href='#inicio'>
            <p onClick={() => setMenu("inicio")} style={menu === "inicio" ? { textDecoration: "underline", textUnderlineOffset: '4px' } : {}}>Inicio</p>
          </Link>
        </li>
        <li>
          <Link to='sobremi' smooth={true} spy={true} offset={-20} duration={500} className='anchor-link' href='#sobremi'>
            <p onClick={() => setMenu("sobremi")} style={menu === "sobremi" ? { textDecoration: "underline", textUnderlineOffset: '4px' } : {}}>Sobre mi</p>
          </Link>
        </li>
        <li>
          <Link to='portfolio' smooth={true} spy={true} offset={-20} duration={500} className='anchor-link' href='#portfolio'>
            <p onClick={() => setMenu("portfolio")} style={menu === "portfolio" ? { textDecoration: "underline", textUnderlineOffset: '4px' } : {}}>Portfolio</p>
          </Link>
        </li>
        <li>
          <Link to='contacto' smooth={true} spy={true} offset={-20} duration={500} className='anchor-link' href='#contacto'>
            <p onClick={() => setMenu("contacto")} style={menu === "contacto" ? { textDecoration: "underline", textUnderlineOffset: '4px' } : {}}>Contacto</p>
          </Link>
        </li>
      </ul>
      <div className="nav-connect">
      <Link to='contacto' smooth={true} spy={true} offset={-20} duration={500} className='anchor-link' href='#contacto'>
            <p onClick={() => setMenu("contacto")}>Conecta conmigo</p>
      </Link>
      </div>
    </div>
  )
}

export default Navbar