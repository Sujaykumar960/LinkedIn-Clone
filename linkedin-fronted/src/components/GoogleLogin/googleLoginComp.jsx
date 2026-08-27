import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const GoogleLoginComp = (props) => {

  const navigate = useNavigate();
  const handleOnSuccess = async(credentialResponse) => {
    const token = credentialResponse.credential;
    const res = await api.post('/api/users/google', { token });

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
