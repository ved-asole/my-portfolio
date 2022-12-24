import React , { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

import './index.css'

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <div>
        <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" />

      </div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <BackToTop />
      <Footer />
    </>
  )
}

export default App