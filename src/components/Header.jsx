import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-5 pt-4'>
        <h2 className='text-base md:text-2xl'>
            Dashboard
        </h2>
        <h2 className='underline font-bold text-base md:text-2xl'>
          Northgate 111
        </h2>
        <h2 className='text-base md:text-2xl'>
            Welcome, Danny
        </h2>
    </div>
  )
}

export default Header