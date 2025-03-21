import React from 'react'
import Navbar from '../Navbar'
import LegalAbout from '../Components/Legal/LegalAbout'
import LegalService from '../Components/Legal/LegalService'
import MeetOurTeam from '../Components/Legal/MeetOurTeam'
import SemiFooter from '../SemiFooter'
import Footer from "../Footer"
import LegalAdditonal from '../Components/Legal/LegalAdditonal'
import Faq from '../Global/Faq'

const Legal = () => {
  return (
    <div>
       <Navbar/>
       <LegalAbout/>
       <LegalService/>
       <LegalAdditonal/>
       <MeetOurTeam/>
       <Faq/>
       <SemiFooter/>
       <Footer/>
    </div>
  )
}

export default Legal
