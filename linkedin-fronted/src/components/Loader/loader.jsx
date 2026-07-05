import React from 'react'
import "./loader.css";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 flex justify-center items-center" style={{ zIndex: 100 }}>
        <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
        </div>
    </div>
  )
}

export default Loader