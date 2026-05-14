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
import Navbar2 from './components/Navbar2/navbar2'
import Feeds from './pages/Feeds/feeds'
import MyNetwork from './pages/MyNetwork/myNetwork'

function App() {
  const isLogin = true;

  return (
    <div className='bg-gray-100 w-full h-full box-border'>
      {isLogin?<Navbar2 /> : <Navbar1 />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='feeds' element={<Feeds />} />
        <Route path='myNetwork' element={<MyNetwork />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
