import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SobreMi from './components/SobreMi/SobreMi'
import Proyectos from './components/Proyectos/Proyectos'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App