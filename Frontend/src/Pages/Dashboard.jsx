import React, { useEffect } from 'react';
import Login from '../Components/Login';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = () => {
      const user = localStorage.getItem('user');
      return user !== null;
    };
    if (!isAuthenticated()) {
      toast.error('Please Login to access the dashboard');
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      Dashboard
      <Toaster />
    </div>
  );
};

export default Dashboard;
