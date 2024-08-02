import React from 'react'
import Link from 'next/link'
import { MenuOpen } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className=' h-10'>
        <div className=" flex items-center h-full w-full justify-between">
          <div className=""> 
              <MenuOpen/>
              Menu
          </div>
          <div className=" ">
              <img className=' h-10 mb-2  '
              src="/images/apartments-for-rent-logo.png" alt="" />
          </div>
          <div className="bg-slate-500 p-2 text-white text-2x1">
              Sign Up/Sign In
          </div>
        </div>
    </div>
  )
}

export default Navbar