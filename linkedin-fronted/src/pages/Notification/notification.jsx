import React from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard'
import Advertisement from '../../components/Advertisement/advertisement'
import Card from '../../components/Card/card'

const Notification = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

      {/* left side bar */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard />
        </div>
      </div>


      {/* middle content */}
      <div className='w-full py-5 sm:w-[50%]'>
        <div>
            <Card padding={0}> 

            </Card>
        </div>
      </div>

      {/* right side bar */}
      <div className='w-[26%] py-5 hidden md:block'>
        <div className='my-5 sticky top-19'>
          <Advertisement />
        </div>
      </div>

      
    </div>
  )
}

export default Notification