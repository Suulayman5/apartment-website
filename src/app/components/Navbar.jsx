import React from 'react'
import Link from 'next/link'
import { MenuOpen } from '@mui/icons-material'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {
  return (
    <div className='h-10 sticky top-0'>
        <div className=" flex items-center h-full w-full justify-between">
          <div className=" ">
              <img className=' h-10 mb-2  '
              src="/images/apartments-for-rent-logo.png" alt="" />
          </div>
          <DarkModeSwitch className=''/>
          <div className="bg-blue-300 p-2 text-xl lg:text-2x1">
           Sign Up/Sign In
          </div>
        </div>
    </div>
  )
}

export default Navbar