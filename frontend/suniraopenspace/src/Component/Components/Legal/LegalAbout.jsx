import React from 'react';
import sidepic from "../../../assets/Legal service/sideimage.png";
import { Link, useNavigate } from 'react-router-dom';

const LegalAbout = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className='px-6 md:px-16 lg:px-[10rem] py-12 md:py-16 mb-16 flex flex-col items-center text-center'>
      <div className='mb-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Legal Services</h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16'>
        <div className='w-full max-w-sm md:max-w-md lg:max-w-lg flex justify-center'>
          <img 
            src={sidepic} 
            className='w-full rounded-2xl border-8 border-gray-50 shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-2xl'
            alt='Legal Service'
          />
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight text-gray-800'>
            We Help You with Legal & Astrology Services
          </h1>
          <p className='text-gray-700 text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 max-w-lg'>
            <span 
              className='font-semibold text-blue-700 cursor-pointer text-base md:text-lg' 
              onClick={handleNavigate}
            >
              Sunira Openspace
            </span> provides expert legal solutions to companies, helping them navigate complex legal challenges with ease. Whether your business requires assistance with regulatory compliance, contract management, or dispute resolution, Sunira Openspace tailors its services to meet your unique needs.
          </p>
          <div className='flex justify-center lg:justify-start w-full'>
            <button className='bg-black text-white w-32 h-12 rounded-md hover:bg-blue-500 cursor-pointer mt-6 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-110'>
              <Link to={'/aboutus'}>Read more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAbout;
