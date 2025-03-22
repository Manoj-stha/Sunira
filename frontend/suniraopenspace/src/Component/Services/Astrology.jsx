import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Components/Astrology/Hero'
import AstrologyService from '../Components/Astrology/AstrologyService'
import ContactUs from '../Components/Astrology/ContactUs'
import Footer from '../Components/Astrology/Footer'
import Faq from '../Components/Astrology/Faq'


const Astrology = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AstrologyService/>
      <ContactUs/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Astrology
