import React from 'react'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import './Proyectos.css'
const Proyectos = () => {
  return (
    <div id="portfolio" className='proyectos'>
        <div className="proyectos-title">
            <h1>Mis últimos proyectos</h1>
        </div>
        <div className="proyectos-container">
            {mywork_data.map((work, index) => {
                return <a target="blank" href={work.w_url}><img key={index} src={work.w_img} alt="" /></a>
            })}
        </div>
        <div className="proyectos-ver-mas">
            <p>Ver más</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Proyectos