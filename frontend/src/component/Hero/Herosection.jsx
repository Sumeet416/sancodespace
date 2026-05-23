import React from 'react'
import './herosection.css'
import Grainient from './Grainient'

const Herosection = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`hero ${className}`.trim()}>
      <div className="hero-bg" aria-hidden="true">
        <Grainient
          color1="#D23C2B"
          color2="#282828"
          color3="#FB961E"
          timeSpeed={0.45}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={80}
          blendAngle={50}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={1.2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.75}
          className="hero-grainient"
        />
      </div>
      <div className="hero-content">
        {children}
      </div>
    </section>
  )
}

export default Herosection