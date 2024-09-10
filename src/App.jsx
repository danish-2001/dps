import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Gallery from './components/Gallery'
import Academy from './components/Academy'
import BeyondClass from './components/BeyondClass'
import NewsEvent from './components/NewsEvent'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Hero/>
    <About/>
    <Mission/>
    <Gallery/>
    <Academy/>
    <BeyondClass/>
    <NewsEvent/>
    <Testimonial/>
    <Footer/>
      
    </>
  )
}

export default App
