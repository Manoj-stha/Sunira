import React from 'react'
import ContactUs from '../Component/Global/ContactUs'
import contact from "../assets/contact.png"
import Navbar from '../Component/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
    <div className='flex gap-20 h-[88vh] justify-center items-center '>
        <div>
            <img src={contact} className='w-[50rem]'/>
        </div>
      <ContactUs/>
    </div>
    </div>
  )
}

export default Contact
