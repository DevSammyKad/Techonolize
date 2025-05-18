import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepperControl = ({ handleClick, handleSubmit, currentStep, steps }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    if (currentStep === steps.length) {
      handleSubmit();
      navigate('/discover');
    } else {
      handleClick('next');
    }
  };

  return (
    <div className="container flex justify-around mt-4 mb-8 pb-8">
      <button
        onClick={() => handleClick('prev')}
        className={`bg-white text-gray-900 uppercase cursor-pointer border-2 border-slate-200 text-sm rounded-xl hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out py-2 px-4  ${
          currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Back
      </button>
      <div className="flex items-center space-x-5 max-sm:space-x-2">
        <button
          onClick={() => handleClick('next')}
          className={`bg-white ${
            currentStep == steps.length ? 'hidden ' : ''
          } text-slate-600 uppercase cursor-pointer border-2 border-slate-100 rounded-xl hover:bg-gray-900 text-sm hover:text-white transition duration-200 ease-in-out py-2 px-4 `}
        >
          Skip
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-slate-600 uppercase cursor-pointer border-2 border-slate-100 rounded-xl hover:bg-black text-sm hover:text-white transition duration-200 ease-in-out py-2 px-4 "
        >
          {currentStep === steps.length ? 'Go To Dashboard' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default StepperControl;
