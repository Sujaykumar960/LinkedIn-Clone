import React,{useState} from 'react'
import Advertisement from '../../components/Advertisement/advertisement'
import Card from '../../components/Card/card'
import EditIcon from '@mui/icons-material/Edit';
import Post from '../../components/Post/post';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../components/Modal/modal'
import ImageModal from '../../components/ImageModal/imageModal';
import EditInfoModal from '../../components/EditInfoModal/editInfoModal';


const Profile = () => {

  const [imageSetModal, setImageModal] = useState(false);
  const [circularImage,setCircularImage] = useState(true);

  const [infoModal, setInfoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false)

  const handleInfoModal = () => {
    setInfoModal(prev => !prev);
  }

  const handleImageModalOpenClose = () => {
    setImageModal(prev => !prev);
  }

  const handleOnEditCover = () => {
    setImageModal(true);
    setCircularImage(false);
  }

  const handleCircularImageOpen = () => {
    setImageModal(true);
    setCircularImage(true);
  }
  
  return (
    <div className='px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100'>
        <div className='flex justify-between'>

            {/* Left Side Main Section */}
            <div className='w-full md:w-[70%]'>
              <div>
                <Card padding={0}>
                  <div className='w-full h-fit bg-gray-200'>
                    <div className='relative w-full h-[200px]'>
                      <div className='absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white' onClick={handleOnEditCover}><EditIcon /></div>
                      <img className='w-full h-[200px] rounded-tr-lg rounded-tl-lg' src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="" />
                      <div className='absolute object-cover top-24 left-6 z-10' onClick={handleCircularImageOpen}><img className='rounded-full border-2 border-white cursor-pointer w-30 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="" /></div>
                    </div>

                    <div className='mt-10 relative px-8 py-2'>
                      <div className='absolute cursor-pointer top-0 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white' onClick={handleInfoModal}><EditIcon /></div>
                      <div className='w-full'>
                        <div className='text-2xl'>User 1</div>
                        <div className='text-gray-700'>Software Engineer</div>
                        <div className='text-sm text-gray-500'>Delhi, India</div>
                        <div className='text-md text-blue-800 w-fit cursor-pointer hover:underline'>2 connections</div>

                        <div className='md:flex w-full justify-between'>
                          <div className='my-5 flex gap-5'>
                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Open to</div>
                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Share</div>
                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Logout</div>
                          </div>
                          <div className='my-5 flex gap-5'>
                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Open to</div>
                            <div className='cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold'>Share</div>
                          </div>
                        </div>


                      </div>
                    </div>

                  </div>

                </Card>
              </div>

              <div className='mt-5'>
                <Card padding={1}>
                  <div className='flex justify-between items-center'>
                    <div className='text-xl'>About</div>
                    <div className='cursor-pointer'><EditIcon /></div>
                  </div>
                  <div className='text-gray-700 text-md w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum officia iure facere! Eum reprehenderit ad eius quaerat asperiores quo totam et, dolores sit magnam earum aliquid corrupti saepe ab animi?</div>
                </Card>
              </div>
              
              <div className='mt-5'>
                <Card padding={1}>
                  <div className='flex justify-between items-center'>
                    <div className='text-xl'>Skills</div>
                  </div>
                  <div className='text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap'>
                    <div className='py-1 px-2 cursor-pointer bg-blue-800 text-white rounded-lg'>React JS</div>
                    <div className='py-1 px-2 cursor-pointer bg-blue-800 text-white rounded-lg'>Node JS</div>
                    <div className='py-1 px-2 cursor-pointer bg-blue-800 text-white rounded-lg'>Express JS</div>
                    <div className='py-1 px-2 cursor-pointer bg-blue-800 text-white rounded-lg'>MongoDB</div>

                  </div>
                </Card>
              </div>

              <div className='mt-5'>
                <Card padding={1}>
                  <div className='flex justify-between items-center'>
                    <div className='text-xl'>Activities</div>
                  </div>
                  <div className='cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold'>Posts</div>

                  {/* Parent div for scrollable Activities */}
                  <div className='overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full'>
                    <div className='cursor-pointer shrink-0 w-[350px]'>
                      <Post profile={1}/>
                    </div>
                    <div className='cursor-pointer shrink-0 w-[350px]'>
                      <Post profile={1}/>
                    </div>
                    <div className='cursor-pointer shrink-0 w-[350px]'>
                      <Post profile={1}/>
                    </div>

                  </div>
                </Card>
              </div>

              <div className='mt-5'>
                <Card padding={1}>
                  <div className='flex justify-between items-center'>
                    <div className='text-xl'>Experience</div>
                    <div className='cursor-pointer'><AddIcon /></div>
                  </div>

                  <div className='mt-5'>

                    <div className='p-2 border-t-1 border-gray-300 flex justify-between'>
                      <div>
                        <div className='text-lg'>DSE Engineer | Full stack Engineer</div>
                        <div className='text-sm'>Amazon</div>
                        <div className='text-sm text-gray-500'>March 2022, Present</div>
                        <div className='text-sm text-gray-500'>Delhi, India</div>
                      </div>
                      <div className='cursor-pointer'><EditIcon /></div>
                    </div>
                    
                    <div className='p-2 border-t-1 border-gray-300 flex justify-between'>
                      <div>
                        <div className='text-lg'>DSE Engineer | Full stack Engineer</div>
                        <div className='text-sm'>Amazon</div>
                        <div className='text-sm text-gray-500'>March 2022, Present</div>
                        <div className='text-sm text-gray-500'>Delhi, India</div>
                      </div>
                      <div className='cursor-pointer'><EditIcon /></div>
                    </div>

                  </div>
                </Card>

              </div>
            </div>



             {/* Right Side Add  */}
            <div className='hidden md:flex md:w-[28%]'>
              <div className='sticky top-19 w-full'>
                <Advertisement />
              </div>

            </div>

        </div>

        {
          imageSetModal && (<Modal title="Upload Image" closeModal={handleImageModalOpenClose}> 
              <ImageModal isCircular={circularImage}/>
            </Modal>
          )
        }

        {
          infoModal && <Modal title="Edit Info" closeModal={handleInfoModal}>
            <EditInfoModal />
          </Modal>
        }

        <Modal >

        </Modal>
    
    </div>
  )
}

export default Profile