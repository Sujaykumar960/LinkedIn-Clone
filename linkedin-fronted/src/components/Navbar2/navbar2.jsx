import React from 'react'
import linkedinLogo from "../../assets/Linkedin_logo.png";
import React, { useState } from 'react'
import './navbar2.css'

const Navbar2 = () => {

  const [dropdown, setDropDown] = React.useState(false);

  return (
    <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000'>
      <div className='flex gap-2 items-center'>
        <div>
          <img className='w-9 h-9' src={linkedinLogo} alt="LinkedIn Logo" />
        </div>
        <div className='relative'>
          <input className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4 border-1' placeholder='Search' type="text" />

          <div className='absolute w-88 left-0 bg-gray-200'>
            <div className='flex gap-2 mb-1 items-center cursor-pointer'>
              <div><img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="" /></div>
              <div>Danish</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar2