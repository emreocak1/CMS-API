import React from 'react'
import heroImgNew from './assets/new.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Content Management System using contentful.com API Service </p>
            </div>
            <div className="img-container">
                <img src={heroImgNew} alt="wandbr" />
            </div>
        </div>
    </section>
  )
}

export default Hero