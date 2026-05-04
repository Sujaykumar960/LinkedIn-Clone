import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import heroImg from './assets/hero.png'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LandingPage/landingPage'
import Footer from './components/Footer/footer'
import {Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp/signUp'
import Login from './pages/Login/login'

function App() {

  return (
    <div className='bg-gray-100 w-full h-full box-border'>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
