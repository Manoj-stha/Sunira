import React from 'react';
import realestate from "../../../assets/Real estate/Realestate.svg";

const RealEstateAbout = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100 px-4 md:px-8'>
      <div className='flex flex-col lg:flex-row items-center lg:items-center my-10 max-w-7xl w-full'>
        <div className='lg:w-1/2 flex flex-col justify-center text-center lg:text-left'>
          <header className='text-3xl md:text-4xl lg:text-6xl font-semibold my-2'>
            Sunira Real Estate Solution - Buy, Sell & Rent Property In Nepal
          </header>
          <p className='my-5 text-base md:text-lg lg:w-4/5'>
            <span className='font-semibold italic'>Sunira Real Estate Solutions P. Ltd.</span> is a government-authorized property dealing company in Nepal. We make buying, selling, and renting houses and land (Ghar-Jagga) easy across Nepal.
          </p>
          <p className='text-base md:text-lg lg:w-4/5'>
            Our goal is to provide the best, most suitable, and affordable housing solutions. With experience and dedication, we assist clients in making wise real estate decisions.
          </p>
          <button className='w-32 py-3 rounded-lg bg-blue-500 text-lg font-bold text-white shadow-2xl hover:bg-blue-700 cursor-pointer mt-8 mx-auto lg:mx-0'>
            Learn More
          </button>
        </div>
        <div className='lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0'>
          <img src={realestate} className='w-4/5 md:w-3/5 lg:w-[25vw] h-auto self-center' alt='Real Estate Illustration'/>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAbout;
