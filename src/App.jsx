import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.jsx'
import Portfolio from './component/Portfolio.jsx'
import About from './component/About.jsx'
import ContactMe from './component/ContactMe.jsx'
import Footer from './component/Footer.jsx'
function App() {


  return (
    <>
    <Navbar />
    <Header />
    <Portfolio />
    <About />
    <ContactMe />
    <Footer />
    </>
  )
}

export default App
