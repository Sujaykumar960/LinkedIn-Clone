import React from 'react'
import Card from '../../components/Card/card'

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
                        <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800'></div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Messages