import React from 'react'

const Conversation = () => {
  return (
    <div className='flex items-center w-full cursor-pointer border-b border-gray-300 gap-3 p-4 hover:bg-gray-200' >
        <div className='shrink-0'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="avatar" className='w-12 h-12 rounded-full cursor-pointer' />
        </div>
        <div>
            <div className='font-semibold'>Shubham</div>
            <div className='text-sm text-gray-500'>Engineer at Google</div>
        </div>
    </div>
  )
}

export default Conversation