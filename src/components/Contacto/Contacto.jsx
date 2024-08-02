import React from 'react'
import './Contacto.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contacto = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8a6e188f-f86d-45c4-b84d-3b3551d3f462");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Mensaje enviado con éxito!")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contacto' className='contacto'>
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
                <form onSubmit={onSubmit} action="" className="contacto-right">
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder='Ingresa tu nombre' name='name' />
                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" placeholder='Ingresa tu correo electrónico' name='email' />
                    <label htmlFor="">Escribe tu mensaje aquí</label>
                    <textarea name="message" rows="8" placeholder='Ingresa tu mensaje'></textarea>
                    <button className="contacto-submit" type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contacto