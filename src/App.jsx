import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SobreMi from './components/SobreMi/SobreMi'
import Proyectos from './components/Proyectos/Proyectos'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
    </div>
  )
}

export default App