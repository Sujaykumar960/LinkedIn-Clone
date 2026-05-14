import React from 'react'
import ImageIcon from '@mui/icons-material/Image';

const AddModal = () => {
  return (
    <div className=''>
        <div className='flex gap-4 items-center'>
            <div className='relative'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="Img" className='w-13 h-13 rounded-full'/>
            </div>
            <div className='text-2xl'>Dummy User</div>
        </div>

        <div>
          <textarea cols={50} rows={5} name="" id="" placeholder="What do you want to talk about?" className='my-3 outline-0 text-xl p-2'></textarea>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="" className='w-20 h-20 rounded-xl'/>
        </div>
        <div className='flex justify-between items-center'>
          <div className='my-6'>
            <label className='cursor-pointer' htmlFor="inputFile"> <ImageIcon /> </label>
            <input type="file" className='hidden' id="inputFile"/>
          </div>
          <div className='bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit'>Post</div>
        </div>

    </div>
  )
}

export default AddModal