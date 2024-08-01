import React from 'react'
import './Contacto.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contacto = () => {
  return (
    <div className='contacto'>
        <div className="contacto-title">
            <h1>Contactame</h1>
        </div>
        <div className="contacto-section">
            <div className="contacto-left">
                <h1>Hablemos!</h1>
                <p>Si deseas obtener más información, colaborar en un proyecto o simplemente saludar, estaré encantado de escucharte. No dudes en contactarme!</p>
                <div className="contacto-detalles">
                    <div className="contacto-detalle">
                        <img src={mail_icon} alt="" />
                        <p>giannantonioelias@gmail.com</p>
                    </div>
                    <div className="contacto-detalle">
                    <img src={call_icon} alt="" />
                        <p>+54 9 3534 29-7565</p>
                    </div>
                </div>
            </div>
            <form action="" className="contacto-right">
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder='Ingresa tu nombre' name='name'/>
                <label htmlFor="">Correo electrónico</label>
                <input type="email" placeholder='Ingresa tu correo electrónico' email='email' />
                <label htmlFor="">Escribe tu mensaje aquí</label>
                <textarea name="message" rows="8" placeholder='Ingresa tu mensaje'></textarea>
                <button className="contacto-submit" type='submit'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contacto