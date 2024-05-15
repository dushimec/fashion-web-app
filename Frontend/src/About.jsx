import React from 'react'
import about from './img/about.png'
import './about.css'

function About () {
  return (
    <section>
      <div className="about-page">
          <div className="about-content">
            <h2>About Us</h2>
             <p>Welcome to Kigali Fashion Market, where style meets affordability. We're your premier destination for chic fashion at unbeatable prices. Explore our curated collection of clothing, where quality and discounts intertwine. Embrace your unique style without breaking the bank. Join us in redefining fashion affordability in Kigali and beyond.</p>
          </div>
          <div className="about-image">
            
             <img src={about} className="family" />
             <div className="circe"></div>
          </div>
 
         </div>
    </section>
  )
}

export default About
