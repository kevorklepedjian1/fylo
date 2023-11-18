import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import CtaSection from './Components/CtaSection'
import Second from './Components/Second'
import Footer from './Components/Footer'
import Attribute from './Components/Attribute'

function App() {


  return (
    <>
     <Header/>
     <Hero/> 
     <Second/>
     <CtaSection/>
     <Footer/>
     <Attribute/>
    </>
  )
}

export default App
