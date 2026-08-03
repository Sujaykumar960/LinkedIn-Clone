import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios'

const Login = (props) => {
    const navigate = useNavigate();
    const [loginField, setLoginField] = useState({ email: "", password: "" });

    const onChangeInput = (event,key) => {
        setLoginField({...loginField, [key]: event.target.value})
    }

    const handleLogin = async() => {
        if(loginField.email.trim().length === 0 || loginField.password.trim().length === 0) {
            return toast.error("Please fill all credentials")
        }
        await axios.post('http://localhost:4000/api/users/login',loginField,{withCredentials: true}).then((res)=>{
            props.changeloginValue(true);
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('userInfo', JSON.stringify(res.data.userExist));
            navigate('/feeds');

        }).catch(err=>{
            console.log(err);
            toast.error(err?.response?.data?.error)
        })
    }

  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>
            <div className='text-3xl'>Sign In</div>
            <div className='my-5'>
                <GoogleLoginComp changeloginValue={props.changeloginValue} />
            </div>

            <div className='flex items-center gap-2'>
                <div className='border-b-1 border-gray-400 w-[45%]'></div><div>or</div><div className='border-b-1 border-gray-400 w-[45%]'></div>
            </div>

            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={loginField.email} onChange={(e) => onChangeInput(e, "email")} className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Email' />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={loginField.password} onChange={(e) => onChangeInput(e, "password")} className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Password' />
                </div>

                <div onClick={handleLogin} className='w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2'>
                    Login
                </div>
            </div>

        </div>

        <div className='mt-4 mb-10 flex gap-1'>New to LinkedIn? <Link to={'/SignUp'} className='text-blue-800 cursor-pointer'>Login</Link></div>
        <ToastContainer />
    </div>
  )
}

export default Login