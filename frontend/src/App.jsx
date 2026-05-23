import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Herosection from './component/Hero/Herosection'

const App = () => {
  return (

    <div id="app">
      <Navbar id="navbar"/>
      <Herosection id="herosection">
        <div className="hero-text">
          <h1>We only <span>teach</span> what <br></br>we are <span>really</span> good at.</h1>
        </div>
      </Herosection>
    </div>
  )
}

export default App