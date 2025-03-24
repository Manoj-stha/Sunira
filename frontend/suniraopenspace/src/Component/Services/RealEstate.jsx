import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Components/RealEstate/Hero'
import Search from "../Components/RealEstate/Search"
import RealEstateAbout from '../Components/RealEstate/RealEstateAbout'

const RealEstate = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Search/>
      <RealEstateAbout/>
    </div>
  )
}

export default RealEstate
