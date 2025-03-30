import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Components/RealEstate/Hero'
import Search from "../Components/RealEstate/Search"
import RealEstateAbout from '../Components/RealEstate/RealEstateAbout'
import Footer from "../Footer"
import Faq from '../Components/RealEstate/Faq'
import GoToTop from "../Common/GoToTop"
import SocialMediaBox from "../../Component/Common/SocialMediaBox";
import TopListing from '../Components/RealEstate/TopListing'
import PremiumListing from '../Components/RealEstate/PremiumListing'
import News from '../Components/RealEstate/News'

const RealEstate = () => {
  return (
    <div>
      <Navbar/>
      <GoToTop/>
      <SocialMediaBox/>
      <Hero/>
      <Search/>
      <TopListing/>
      <PremiumListing/>
      <RealEstateAbout/>
      <News/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default RealEstate
