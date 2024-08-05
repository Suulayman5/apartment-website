'use client'
import React from 'react'
import { LightMode, DarkMode } from '@mui/icons-material'
import { useTheme } from 'next-themes'
import {useState, useEffect} from 'react'

const DarkModeSwitch = () => {
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    const [mounted, setMounted] = useState(false)
    useEffect(()=> setMounted(true),[])
    return (
    <div>{mounted && (currentTheme === 'dark' ? (<LightMode onClick={()=> setTheme('light')}  className='text-xl cursor-pointer hover:text-blue-300'/> 
    ):( <DarkMode onClick={()=> setTheme('dark')} className='text-xl cursor-pointer hover:text-blue-300'/>))}</div>
  )
}

export default DarkModeSwitch