import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Components/Astrology/Hero'
import AstrologyService from '../Components/Astrology/AstrologyService'
import ContactUs from '../Components/Astrology/ContactUs'

const Astrology = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AstrologyService/>
      <ContactUs/>
    </div>
  )
}

export default Astrology
