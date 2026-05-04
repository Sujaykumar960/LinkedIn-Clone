import React from 'react'

const signUp = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-4xl mb-5'>Make the most of your professional life</div>
        <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>

            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Email' />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Password' />
                </div>

                <div>
                    <label htmlFor="f_name">Full Name</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Full name' />
                </div>

                <div className='w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2'>
                    Register
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <div className='border-b-1 border-gray-500 w-[45%]'></div><div>or</div><div className='border-b-1 border-gray-500 w-[45%]'></div>
            </div>

            <div>Sign in with Google</div>

        </div>

        <div className='mt-4 mb-10 flex gap-1'>Already on LinkedIn? <div className='text-blue-800 cursor-pointer'>Sign in</div></div>

    </div>
  )
}

export default signUp