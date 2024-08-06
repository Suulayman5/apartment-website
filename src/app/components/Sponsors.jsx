import React from 'react'

const Sponsors = () => {
  return (
    <div className="m-3 mt-5 md:mt-7 lg:m-4 lg:mt-24 mx-5 md:mx-10 lg:mx-20">
      <h2 className='flex justify-center font-serif mb-5 lg:mb-10 text-2xl md:text-3xl lg:text-4xl'>Our Partners</h2>
      <div className='h-[40rem] '>
        <div className="flex h-1/3 bg-white w-full">
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (1).jpg"/>
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (2).jpg"/>
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (3).jpg"/>
        
        </div>
        <div className="flex h-1/3 bg-white w-full">
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (4).jpg" alt="" />
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (5).jpg" alt="" />
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (6).jpg" alt="" />
        </div>
        <div className="flex h-1/3 bg-white w-full">
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image (7).jpg"/>
          <img className='w-1/5 h-1/3 m-auto lg:w-1/6' src="/images/image.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default Sponsors