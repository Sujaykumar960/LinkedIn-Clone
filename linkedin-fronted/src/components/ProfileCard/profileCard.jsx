import React from 'react'
import Card from '../../components/Card/card'

const ProfileCard = () => {
  return (
    <Card padding={0}>
        <div className='relative h-25'>
            <div className='relative w-full h-22 rounded-md'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62N3ldPD_PCO6u_X-l7UaEo-L2r1NAZ_G0w&s" alt="" className='rounded-t-md h-full w-full' />
            </div>
            <div className='absolute top-14 left-6 z-10'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="" className='rounded-full border-2 h-16 w-16 border-white cursor-pointer'/>
            </div>
        </div>
        <div className='p-5'>
            <div className='text-xl'>Sujay Kumar</div>
            <div className='text-sm my-1'>@Amazon Software Engineer</div>
            <div className='text-sm my-1'>Kolkata, India</div>
            <div className='text-sm my-1'>Amazon</div>
        </div>
    </Card>
  )
}

export default ProfileCard