import React from 'react'
import Card from '../../components/Card/card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Conversation from '../../components/Conversation/conversation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Messages = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        <div className='w-full justify-between flex pt-5'>

            {/* left side */}
            <div className='w-full md:w-[70%]'>
                <Card padding={0}>
                    <div className='border-b-1 border-gray-300 px-5 py-5 font-semibold text-lg'>
                        Messaging
                    </div>

                    <div className='border-b-1 border-gray-300 px-5 py-5 font-semibold text-lg'>
                        <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white'>Focused <ArrowDropDownIcon /></div>
                    </div>

                    {/* Chat Card */}
                    <div className='w-full md:flex md:flex'>
                        <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400'>
                            {/* For Each chat Conversation */}
                            <Conversation />
                        </div>


                        <div className='border-gray-400overflow-auto w-full md:w-[60%]'>
                            {/* Chat Area */}
                            <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                                <div>
                                    <p className='text-sm font-semibold'>User 1</p>
                                    <p className='text-sm text-gray-400'>Hi this is user 1</p>
                                </div>
                                <div><MoreHorizIcon /></div>
                            </div>

                            <div className='h-[360px] w-full overflow-auto border-b-1 border-gray-300'>
                                <div className='w-full border-b-1 border-gray-300 gap-3 p-4' >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="User" className='w-16 h-16 rounded-full cursor-pointer' />
                                    <div className='my-2'>
                                        <p className='text-md'>User 1</p>
                                        <p className='text-sm text-gray-400'>Hi this is user 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Messages