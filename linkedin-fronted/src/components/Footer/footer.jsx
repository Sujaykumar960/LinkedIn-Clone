import React from "react";
import linkedinLogo from "../../assets/Linkedin_logo.png";

function Footer() {
  return (
    <div className="w-[100%] bg-gray-200 flex justify-center">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-xl">Linked</h3>
          <img src={linkedinLogo} alt="LinkedIn Logo" className="w-7 h-7" />
        </div>
        <div className="text-sm">@Copyright 2026</div>
      </div>
    </div>
  );
}

export default Footer;
