import React from 'react'
import LandingPage from './LandingPage'
import About from '../components/About'
import Events from '../components/Events'

const HomePage = () => {
  return (
    <div>
        <LandingPage/>
        <About/>
        <Events/>
    </div>
  )
}

export default HomePage