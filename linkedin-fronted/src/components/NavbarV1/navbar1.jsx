import React from "react";
import linkedinLogo from "../../assets/Linkedin_logo.png";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="w-full bg-gray-100 md:px-25 px-5 flex justify-between py-4 box-border">
      <Link to="/" className="flex justify-between">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-3xl">LinkedIn</h3>
          <img src={linkedinLogo} alt="LinkedIn Logo" className="w-9 h-9" />
        </div>
      </Link>

      <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
        <Link to="/signUp" className="md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-400 cursor-pointer">Join now</Link>
        <Link to="/login" className="px-5 py-2 box-border border-2 text-blue-900 border-blue-600 rounded-3xl text-xl hover:bg-blue-300 cursor-pointer">Sign in</Link>
      </div>

    </nav>
  );
};

export default Navbar1;
