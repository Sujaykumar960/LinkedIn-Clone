import React from 'react'
import Card from '../../components/Card/card'
import ProfileCard from '../../components/ProfileCard/profileCard'

const Feeds = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      {/* left side bar */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard />
        </div>

        <div className='w-full my-5'>
          <Card padding={1}>
            <div className='w-full flex justify-between'>
              <div>Profile Viewers</div>
              <div className='text-blue-900'>20</div>
            </div>
            <div className='w-full flex justify-between'>
              <div>Post Impression</div>
              <div className='text-blue-900'>75</div>
            </div>
          </Card>
        </div>
      </div>


      {/* middle content */}
      <div>

      </div>

      {/* right side bar */}
      <div>

      </div>


    </div>
  )
}

export default Feeds