import React from 'react'
import linkedinLogo from '../Image/Linkedin_logo.png'

const Navbar1 = () => {
  return (
    <nav className='w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
      <div className='flex gap-0 items-center cursor-pointer'>
        <h3 className='text-blue-800 font-bold text-3xl'>LinkedIn</h3>
        <img src={linkedinLogo} alt="LinkedIn Logo" className='w-6 h-6' />
      </div>
    </nav>
  )
}

export default Navbar1