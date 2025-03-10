import React from 'react'
import sidepic from "../../../assets/Legal service/sidepic.png"
const LegalAbout = () => {
  return (
    <div className='px-[10rem] py-[3rem]  flex flex-col items-center'>
        <div>
            <h1 className='text-5xl font-bold '>Legal Services</h1>
        </div>
        
    <div className='flex justify-between'>
      <div className='w-[50rem] '>
        <img src={sidepic} className=''/>
      </div>
      <div className='flex flex-col justify-center'>
        <h1 className='text-5xl font-bold text-wrap w-[35rem] mb-5'>We Help You for
        Legal & Astrology Services</h1>
        <p className='w-[35rem]'>
        Sunira Openspace provides expert legal solutions to companies, helping them navigate complex legal challenges with ease. Whether your business requires assistance with regulatory compliance, contract management, or dispute resolution, Sunira Openspace tailors its services to meet your unique needs. In addition to standard legal consultation, Sunira Openspace also offers a unique blend of legal advice paired with astrology insights, providing a holistic approach to decision-making. With a dedicated team of professionals, they ensure that your company remains legally compliant and safeguarded, enabling you to focus on growth and success in today's competitive business environment.
        </p>
        <button className='bg-black text-white flex-wrap w-[8rem] h-[3rem] rounded-md hover:bg-blue-500 cursor-pointer mt-6 '>Read more</button>
      </div>
    </div>
    </div>
  )
}

export default LegalAbout
