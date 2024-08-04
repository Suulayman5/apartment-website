import React from 'react'
import Link from 'next/link'

const RentalListings = () => {
  return (
    <div className='mx-5 md:mx-10 lg:mx-20'>
        <div className="m-3 mt-5 md:mt-7 lg:m-4 lg:mt-24">
            <h2 className='flex justify-center font-serif mb-2 text-2xl md:text-3xl lg:text-4xl' >The Most Rental Listings</h2>
            <p className='flex justify-center text-gray-500 text-sm lg:text-xl'>Choose from over ten thousand apartments, houses, condos and townhomes for rent.</p>
        </div>
        <div className="flex bg-slate-100 h-70 mt-10 ">
            <div className="w-1/2  flex flex-col justify-center px-6 lg:px-12">
                <h3 className='font-serif text-2xl mt-4 mb-2 lg:text-3xl'>Renting Made Simple</h3>
                <p className='text-gray-500 '>Browse the highest quality listings, apply online, sign your lease, and evev pay your rent from any device</p>
                <Link href='/'
                    className='text-blue-400 mt-2 mb-3 lg:mt-3 lg:text-xl'
                >Find Out More</Link>
            </div>
            <div className=" w-1/2">
                <img className='h-full w-full'
                src="/images/widget_property_mgr_resources_938.png" alt="" />
            </div>
        </div>
        
        <div className="m-3 mt-5 md:mt-7 lg:m-4 lg:mt-24">
            <h2 className='flex justify-center font-serif mb-2 text-2xl md:text-3xl lg:text-4xl' >Discover Homeownership</h2>
            <p className='flex justify-center text-gray-500 text-sm lg:text-xl'>Renting is great, but maybe you’re thinking about buying a home instead. We want you to find the right place. That’s why our sister site, Homes.com, is designed to help you find your dream home, even if you’re a first time buyer.</p>
       
        </div>
        <div className="flex bg-slate-100 h-70 mt-10 ">
            <div className="w-1/2  flex flex-col justify-center px-6 lg:px-12">
                <h3 className='font-serif text-2xl mt-4 mb-2 lg:text-3xl'>Explore Your Options</h3>
                <p className='text-gray-500'>Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.</p>
                <Link href='/'
                    className='text-blue-400 mt-2 mb-3 lg:mt-3 lg:text-xl'
                >Start Your Search</Link>
            </div>
            <div className=" w-1/2">
                <img className='h-full w-full'
                src="/images/widget_discover_home_ownership_1407.jpg" alt="" />
            </div>
        </div>
        <div className="m-3 mt-5 md:mt-7 lg:m-4 lg:mt-24">
            <h2 className='flex justify-center font-serif mb-2 text-2xl md:text-3xl lg:text-4xl' >The Perfect Place to Manage Your Property</h2>
            <p className='flex justify-center text-gray-500 text-sm lg:text-xl'>Work with the best suite of property management tools on the market</p>
       
        </div>
        <div className="flex bg-slate-100 h-70 mt-10 ">
            <div className="w-1/2  flex flex-col justify-center px-6 lg:px-12">
                <h3 className='font-serif text-2xl mt-4 mb-2 lg:text-3xl'>Advertise Your Rental</h3>
                <p className='text-gray-500'>Connect with more than 5 million renters looking for new homes using our comprehensive marketing platform.</p>
                <Link href='/'
                    className='text-blue-400 mt-2 mb-3 lg:mt-3 lg:text-xl'
                >List Your Property</Link>
            </div>
            <div className=" w-1/2">
                <img className='h-full w-full'
                src="/images/widget_property_mgr_resources_938.png" />
            </div>
        </div>
        <div className="flex flex-row-reverse bg-slate-100 h-70 ">
            <div className="w-1/2  flex flex-col justify-center px-6 lg:px-12">
                <h3 className='font-serif text-2xl mt-4 mb-2 lg:text-3xl'>Lease 100% Online</h3>
                <p className='text-gray-500'>Accept applications, process rent payments online, and sign digital leases all powered on a single platform.</p>
                <Link href='/'
                    className='text-blue-400 mt-2 mb-3 lg:mt-3 lg:text-xl'
                >Manage Your Property</Link>
            </div>
            <div className=" w-1/2">
                <img className='h-full w-full'
                src="/images/widget_tips_for_renters_469.png" alt="" />
            </div>
        </div>
        <div className="m-3 mt-5 md:mt-7 lg:m-4 lg:mt-24">
            <h2 className='flex justify-center font-serif mb-2 text-2xl md:text-3xl lg:text-4xl' >Renting Made Easy for Residents and Property Managers</h2>
            <p className='flex justify-center text-gray-500 text-sm lg:text-xl'>Our articles, guides, and videos help you through the process, start to finish.</p>
       
        </div>
        <div className="flex bg-slate-100 h-70 mt-10 ">
            <div className="w-1/2  flex flex-col justify-center px-6 lg:px-12">
                <h3 className='font-serif text-2xl mt-4 mb-2 lg:text-3xl'>Tips for Renters</h3>
                <p className='text-gray-500'>Find answers to all of your renting questions with the best renter’s guide in the galaxy.</p>
                <Link href='/'
                    className='text-blue-400 mt-2 mb-3 lg:mt-3 lg:text-xl'
                >Browse Articles</Link>
            </div>
            <div className=" w-1/2">
                <img className='h-full w-full'
                src="/images/widget_property_mgr_resources_938.png" />
            </div>
        </div>
        <div className="flex flex-row-reverse bg-slate-100 h-70 ">
            <div className="w-1/2  flex flex-col justify-center px-6 lg:px-12">
                <h3 className='font-serif text-2xl mt-4 mb-2 lg:text-3xl'>Property Manager Resources</h3>
                <p className='text-gray-500'> Stay up-to-date using our tips and guides on rent payments, leasing, management solutions, and more.</p>
                <Link href='/'
                    className='text-blue-400 mt-2 mb-3 lg:mt-3 lg:text-xl'
                >Stay Informed</Link>
            </div>
            <div className=" w-1/2">
                <img className='h-full w-full'
                src="/images/widget_tips_for_renters_469.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default RentalListings