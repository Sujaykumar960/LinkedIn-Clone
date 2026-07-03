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
                <div className='w-full'>

                    {/* For each Notifications */}
                    <div className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" className='rounded-full cursor-pointer w-17 h-17'/>
                        <div>Dummy User1 has sent you a connection request</div>
                    </div>

                    {/* For each Notifications */}
                    <div className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" className='rounded-full cursor-pointer w-17 h-17'/>
                        <div>Dummy User1 has commented on your post</div>
                    </div>

                    {/* For each Notifications */}
                    <div className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3`}>
                        <img src="https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8=" alt="" className='rounded-full cursor-pointer w-17 h-17'/>
                        <div>Dummy User2 has sent you a connection request</div>
                    </div>

                </div>
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