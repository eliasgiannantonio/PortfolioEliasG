import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Elias Giannantonio. Todos los derechos reservados</p>
        </div>
    </div>
  )
}

export default Footer