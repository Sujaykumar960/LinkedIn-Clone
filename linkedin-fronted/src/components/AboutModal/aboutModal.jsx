import React from 'react'

const AboutModal = () => {
  return (
    <div className='my-8'>
        <div className='w-full mb-4'>
            <label>About*</label>
            <br />
            <textarea name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} rows={3}></textarea>
        </div>
        <div className='w-full mb-4'>
            <label>Skills*(Add by separating commas)</label>
            <br />
            <textarea name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} rows={3}></textarea>
        </div>
        <div className='w-full mb-4'>
            <label htmlFor="resumeUpload" className='p-2 bg-blue-800 text-white rounded-lg cursor-pointer'>Resume Upload</label>
            <input type="file" id="resumeUpload" className='hidden' />
            <div className='my-2'>fweoifjwjfscagi</div>
        </div>

        <div className='bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Save</div>
    </div>
  )
}

export default AboutModal