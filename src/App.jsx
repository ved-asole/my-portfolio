import React , { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App