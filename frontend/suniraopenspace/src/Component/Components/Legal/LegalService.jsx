import React from 'react'

const LegalService = () => {
  return (
    <div className='flex justify-center items-center text-xl flex-wrap px-10 py-16 bg-gray-100'>
    <div className='w-[60%] h-[20rem] '>
    <div className='py-5'> 
        <h1 className='text-4xl font-semibold text-gray-700'>Our Services</h1>
        <p className=" text-gray-600 mt-4">
          We provide a wide range of mediation and legal reconciliation
          services, covering family, civil, criminal, and corporate disputes.
        </p>
    </div>
    <div className='  px-6 text-gray-700'>
        <ul className='list-disc space-y-2'>
            <li><span className='font-semibold text-gray-800'>Criminal Cases</span> – Strong legal defense for fraud, theft, assault, and other offenses, ensuring your rights are protected.</li>
            <li><span className='font-semibold text-gray-800'> Civil Cases</span> – Resolving property disputes, contract breaches, and agreements through negotiation or litigation.</li>
            <li><span className='font-semibold text-gray-800'>Family Law</span> – Legal support for divorce, child custody, alimony, and inheritance with a fair and compassionate approach.</li>
            <li><span className='font-semibold text-gray-800'> Legal Consultation & Advocacy</span>– Expert representation in Supreme, High, and District Courts for all legal concerns.</li>
        </ul>
    </div>
    </div>
    </div>
  )
}

export default LegalService
