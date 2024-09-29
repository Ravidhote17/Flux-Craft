import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/eyes'
import Features from './components/Features'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-black'>
          <Navbar/>
          <LandingPage/>
          <Marquee/>
          <About/>
          <Eyes/>
          <Features/>
    </div>
  )
}

export default App