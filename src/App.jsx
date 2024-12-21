import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.jsx'
import Portfolio from './component/Portfolio.jsx'
import About from './component/About.jsx'
import ContactMe from './component/ContactMe.jsx'
import Footer from './component/Footer.jsx'
import {Route,Routes } from 'react-router'
function App() {


  return (
    <>
    <Navbar />
    <Header />
    <Routes >
      <Route path='/' element={<Portfolio/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<ContactMe/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
