import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link } from 'react-scroll'


function Navbar() {

  const [menu, setMenu] = useState("inicio");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <img className="logo" src={logo} alt="" />
      <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt=""  className='nav-mob-close'/>
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