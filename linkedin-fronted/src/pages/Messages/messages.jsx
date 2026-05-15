import React from 'react'
import Card from '../../components/Card/card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                            <div className='flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200' >
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s" alt="avatar" className='w-10 h-10 rounded-full' />
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