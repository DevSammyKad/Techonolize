import React, { useState, useContext } from 'react';
import Stepper from '../Components/Stepper';
import StepperControl from '../Components/StepperControl';
import { StepperContext } from '../contexts/StepperContext';
import Account from '../Components/steps/Account';
import Details from '../Components/steps/Details';
import Final from '../Components/steps/Final';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const OnboardingPage = () => {
  // State to manage current step in the stepper
  const [currentStep, setCurrentStep] = useState(1);

  // State to manage user data collected from the form steps
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    password: '',
    phoneNo: '',
    profile: {
      id: '',
      username: '',
      firstName: '',
      lastName: '',
      bio: '',
      portfolios: [],
      posts: [],
      jobsPosted: [],
      availability: false,
      rate: 0,
      location: '',
      languages: [],
      linkedin: '',
      github: '',
      twitter: '',
      profilePhoto: '',
    },
  });
  // State to manage the final data before submission
  const [finalData, setFinalData] = useState([]);

  // API URL for the onboarding endpoint
  const API_URL = import.meta.env.VITE_BACKEND_BASE_URL;
  console.log(API_URL);
  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/user/new`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      toast.success('User created successfully!');
      const data = await response.data;
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error creating user!');
    }
  };

  // Steps to display in the stepper
  const steps = ['Personal Information', 'Account Information', 'Final'];

  // Function to display the correct step component based on the current step
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Final finalData={finalData} />;
      default:
        return null;
    }
  };

  // Function to handle next and previous button clicks
  const handleClick = (direction) => {
    let newStep = currentStep;

    if (direction === 'next') {
      newStep++;
      if (newStep === steps.length) {
        // Prepare final data before submission
        setFinalData(userData);
        handleSubmit();
      }
    } else {
      newStep--;
    }

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="sm:w-3/5 md:w-3/5 lg:w-1/2 mx-auto shadow-xl rounded-2xl bg-white">
      <div className="container horizontal mt-5 p-10">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="my-5 p-10">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        handleSubmit={currentStep === steps.length ? handleSubmit : null}
        steps={steps}
      />
      <Toaster />
    </div>
  );
};

export default OnboardingPage;
