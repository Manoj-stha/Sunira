import React from 'react'
import sidepic from "../../../assets/Legal service/sideimage.png"
import { useNavigate } from 'react-router-dom'
const LegalAbout = () => {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/')
  }
  return (
    <div className='px-[10rem] py-[3rem] mb-26 flex flex-col items-center '>
        <div className='mb-26'>
            <h1 className='text-5xl font-bold '>Legal Services</h1>
        </div>
    <div className='flex justify-between gap-22  p-2 '>
      <div className=' flex items-center'>
        <img src={sidepic} className='rounded-2xl border-8 border-gray-50 shadow-xl transition-transform duration-200 hover:scale-95 hover:shadow-2xl '/>
      </div>
      <div className='flex flex-col justify-center '>
        <h1 className='text-5xl font-bold text-wrap w-[32rem] mb-5 leading-14'>We Help You for
        Legal & Astrology Services</h1>
        <p className='w-[35rem] leading-7'>
        <span className='font-semibold text-blue-700 cursor-pointer text-lg'onClick={handleNavigate}>Sunira Openspace</span> provides expert legal solutions to companies, helping them navigate complex legal challenges with ease. Whether your business requires assistance with regulatory compliance, contract management, or dispute resolution, Sunira Openspace tailors its services to meet your unique needs. In addition to standard legal consultation, Sunira Openspace also offers a unique blend of legal advice paired with astrology insights, providing a holistic approach to decision-making. With a dedicated team of professionals, they ensure that your company remains legally compliant and safeguarded, enabling you to focus on growth and success in today's competitive business environment.
        </p>
        <button className='bg-black text-white flex-wrap w-[8rem] h-[3rem] rounded-md hover:bg-blue-500  cursor-pointer mt-6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-110 '>Read more</button>
      </div>
    </div>
    </div>
  )
}

export default LegalAbout
