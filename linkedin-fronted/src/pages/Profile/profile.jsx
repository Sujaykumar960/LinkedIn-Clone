import React from 'react'
import Advertisement from '../../components/Advertisement/advertisement'
import Card from '../../components/Card/card'

const Profile = () => {
  return (
    <div className='px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100'>
        <div className='flex justify-between'>

            {/* Left Side Main Section */}
            <div className='w-full md:w-[70%]'>
              <div>
                <Card padding={0}>
                  <div className='w-full h-fit bg-gray-200'>
                    <div className='relative w-full h-[200px]'>

                      <img className='w-full h-[200px] rounded-tr-lg rounded-tl-lg' src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="" />
                      <div className='absolute object-cover top-24 left-6 z-10'><img className='rounded-full border-2 border-white cursor-pointer w-30 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="" /></div>
                    </div>

                    <div className='mt-10 relative px-8 py-2'>
                      <div className='w-full'>
                        <div className='text-2xl'>User 1</div>
                        <div className='text-gray-700'>Software Engineer</div>
                        <div className='text-sm text-gray-500'>Delhi, India</div>
                        <div className='text-md text-blue-800 w-fit cursor-pointer hover:underline'>2 connections</div>

                        
                      </div>
                    </div>

                  </div>

                </Card>
              </div>
            </div>

            <div className='hidden md:flex md:w-[28%]'>
              <div className='sticky top-19 w-full'>
                <Advertisement />
              </div>

            </div>

        </div>
    
    </div>
  )
}

export default Profile