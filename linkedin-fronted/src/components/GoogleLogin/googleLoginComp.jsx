import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLoginComp = (props) => {

  const navigate = useNavigate();
  const handleOnSuccess = async(credentialResponse) => {
    const token = credentialResponse.credential;
    const res = await axios.post('http://localhost:4000/api/users/google', { token }, { withCredentials: true });

    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('userInfo', JSON.stringify(res.data.user));
    props.changeloginValue(true);
    navigate('/feeds');
  }
  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={(credentialResponse)=>handleOnSuccess(credentialResponse)}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComp;
