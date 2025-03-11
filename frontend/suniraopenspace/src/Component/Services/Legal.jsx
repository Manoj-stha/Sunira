import React from 'react'
import Navbar from '../Navbar'
import LegalAbout from '../Components/Legal/LegalAbout'
import LegalService from '../Components/Legal/LegalService'
import MeetOurTeam from '../Components/Legal/MeetOurTeam'
import SemiFooter from '../SemiFooter'
import Footer from "../Footer"
const Legal = () => {
  return (
    <div>
       <Navbar/>
       <LegalAbout/>
       <LegalService/>
       <MeetOurTeam/>
       <SemiFooter/>
       <Footer/>
    </div>
  )
}

export default Legal
