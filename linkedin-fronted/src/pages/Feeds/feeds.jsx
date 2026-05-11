import React from 'react'
import Card from '../../components/Card/card'
import ProfileCard from '../../components/ProfileCard/profileCard'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import Advertisement from '../../components/Advertisement/advertisement'
import Post from '../../components/Post/post'

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
      <div className='w-[100%] py-5 sm:w-[50%]'>
        {/* Post Section */}
        <div>
          <Card padding={1}>
            <div className='flex gap-2 items-center'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="" className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer'/>
              <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'> Start a Post </div>
            </div>

            <div className='w-full flex mt-3'>
              <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                <VideoCameraBackIcon sx={{color: 'green'}}/>
                Video
              </div>
              <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                <ImageIcon sx={{color: 'blue'}} />
                Photo
              </div>
              <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                <ArticleIcon sx={{color: 'orange'}} />
                Article
              </div>
            </div>
          </Card>
        </div>

        <div className='border-b-1 border-gray-400 w-[100%] my-5' /> 

        <div className='w-full flex flex-col gap-5'>
          <Post />

          <Post />
        </div>

      </div>

      {/* right side bar */}
      <div className='w-[26%] py-5 hidden md:block'>
        
        <div>
          
        </div>
        <div className='my-5 sticky top-19'>
          <Advertisement />
        </div>
      </div>
    </div>
  )
}

export default Feeds