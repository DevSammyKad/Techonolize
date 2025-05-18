import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initOTPless } from '../utils/initOtpless';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleUserData = async (otplessUser) => {
    const dynamicToken = otplessUser.token;
    console.log('Received Token', dynamicToken);
    // try {
    //   const response = await axios.get(
    //     `${import.meta.env.VITE_BACKEND_BASE_URL}/getUserInfo`,
    //     {
    //       params: { token: dynamicToken },
    //     }
    //   );
    //   console.log('User info:', response.data);
    // Store User Data in local storage
    // localStorage.setItem('userData', JSON.stringify(response.data));
    // localStorage.setItem('token', dynamicToken);

    await axios.post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/storeUser`,
      null,
      {
        params: { token: dynamicToken },
      }
    );
    console.log(dynamicToken, 'Data Send Successfully');

    navigate('/onboarding');
    // } catch (error) {
    //   console.error('Error fetching user data:', error);
    //   // Handle the error appropriately (e.g., show a user-friendly message)
    // }
  };

  useEffect(() => {
    initOTPless(handleUserData);
  }, []);

  return <div id="otpless-login-page"></div>;
};

export default Login;
