import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <>
    <Header/>
    <Banner/>
    <AboutMe/>
    <Services/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/> 
    </>
   
  )
}

export default page