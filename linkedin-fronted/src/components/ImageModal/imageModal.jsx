import React from 'react'

const ImageModal = ({isCircular}) => {
  return (
    <div className='p-5 relative flex items-center flex-col h-full'>
        {
            isCircular ? (
                <img className='rounded-full w-[150px] h-[150px] mb-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="" />
            ) : (
                <img className='rounded-xl w-full h-[200px] object-cover mb-40' src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg" alt="" />
            )
        }

        <label htmlFor="btn-submit" className='absolute bottom-2 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer mb-7'>Upload</label>
        <input type="file" className='hidden' id='btn-submit'/>

        <div className='absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer '>Submit</div>
    </div>
  )
}

export default ImageModal