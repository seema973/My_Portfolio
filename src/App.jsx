import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
