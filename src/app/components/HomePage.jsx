import React from 'react'

const HomePage = () => {
  return (
    <div className="relative bg-[url('/images/1366.jpg')] bg-cover bg-center h-[26.875rem] grid place-items-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center w-3/4">
            <h1 className="text-6xl">
              Discover Your New Home
            </h1>
            <p className="text-lg mt-2">
              Helping millions of Nigerians find their perfect home
            </p>
            <form action="search">
              <input className="p-3 text-xs w-2/3 mr-1 mt-4" type="search" name="" id="" placeholder="Search here" />
              <button className="bg-red-900 p-3 text-xs" type="search">Search</button>
            </form>
          </div>
      </div>
  )
}

export default HomePage