import React from 'react'
import Link from 'next/link'

const Rental = () => {
  return (
    <div className='m-3 mt-5 md:mt-7 lg:m-4 lg:mt-24 mx-5 md:mx-10 lg:mx-20'>
        <h2 className="flex justify-center font-serif mb-6 lg:mb-10 text-2xl md:text-3xl lg:text-4xl">Explore Rentals</h2>
       <div className="flex flex-col w-full lg:flex-row lg:justify-around">
        <div className="w-90 h-[20.875rem] lg:h-[23.875rem] lg:w-[300px] rounded-md m-3 shadow-lg">
          <img className='h-1/2 w-full rounded-t-md' src='/images/elevate-chicago-il-building-photo.jpg' />
          <div className="flex flex-col justify-center mt-2">
            <p className='text-center font-bold m-2 text-xl lg:text2xl lg:m-3'>Residential at Banana island</p>
            <p className=' text-center m-3 text-sm lg:m-3'>Banana island, Lagos</p>
            <p className='text-center m-2 text-sm lg:m-3'>4 Beds: N26,000,000 - N34,000,000</p>
          </div>
        </div>
        <div className="w-90 h-[20.875rem] lg:h-[23.875rem] lg:w-[300px] rounded-md m-3 shadow-lg">
          <img className='h-1/2 w-full rounded-t-md' src='/images/mondial-river-west-chicago-il-building-photo.jpg' />
          <div className="flex flex-col justify-center mt-2">
            <p className='text-sm text-center font-bold sm:mb-1 md:m-2 md:text-xl lg:text2xl lg:m-3'>Condo at meitama</p>
            <p className='text-center m-3 text-sm lg:m-3'>Renko Estate Maitama, Abuja</p>
            <p className='text-center m-2 text-sm lg:m-3'>2 Beds: N13,000,000 - N17,760,000</p>
          </div>
        </div>
        <div className="w-90 h-[20.875rem] lg:h-[23.875rem] lg:w-[300px] rounded-md m-3 shadow-lg">
          <img className='h-1/2 w-full rounded-t-md' src='/images/presidential-towers-chicago-il-building-photo.jpg' />
          <div className="flex flex-col justify-center mt-2">
            <p className='text-sm text-center font-bold sm:mb-1 md:m-2 md:text-xl lg:text2xl lg:m-3'>Duplex at Lupe</p>
            <p className='text-center m-3 text-sm lg:m-3 '>Oworo Estate Lupe, Abuja</p>
            <p className='text-center m-2 text-sm lg:m-3'> Beds with Swimming Pool: N20,000,000 - N24,000,000</p>
          </div>
        </div>
        <div className="w-90 h-[20.875rem] lg:h-[23.875rem] lg:w-[300px] rounded-md m-3 shadow-lg">
          <img className='h-1/2 w-full rounded-t-md' src='/images/shoreham-and-tides-chicago-il-building-photo.jpg' />
          <div className="flex flex-col justify-center mt-2">
            <p className='text-sm text-center font-bold sm:mb-1 md:m-2 md:text-xl lg:text2xl lg:m-3'>Duplex at Lupe</p>
            <p className='text-center m-3 text-sm lg:m-3'>Banana island, Lagos</p>
            <p className='text-center m-2 text-sm lg:m-3'>3 Beds: N22,000,000 - N30,000,000</p>
          </div>
        </div>
      </div>
       <div className="flex justify-center">
        <Link className="bg-blue-300 p-3 text-center my-3 rounded-md"
            href='/'> View More</Link>
        </div>
   </div>
  )
}

export default Rental