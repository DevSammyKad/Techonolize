import React, { useEffect, useRef, useState } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [stepState, setStepState] = useState([]);

  useEffect(() => {
    const initialStepState = steps.map((step, index) => ({
      description: step,
      completed: index < currentStep - 1,
      active: index === currentStep - 1,
    }));
    setStepState(initialStepState);
  }, [steps, currentStep]);

  const displaySteps = stepState.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== stepState.length - 1
            ? 'w-full flex items-center'
            : 'flex items-center'
        }
      >
        <div className="relative flex flex-col items-center text-indigo-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 w-12 h-12 flex items-center justify-center font-semibold text-lg py-3 ${
              step.active
                ? 'bg-indigo-500 text-white'
                : step.completed
                ? 'bg-indigo-400 text-white'
                : ''
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold">&#10003;</span>
            ) : (
              index + 1
            )}

            {/* DIsplay Number  */}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 font-medium uppercase text-xs ${
              step.active ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        {/* display line */}
        {index !== stepState.length - 1 && (
          <div
            className={`flex-auto border-t-2 transition ease-in-out duration-500 ${
              step.completed ? 'border-indigo-400' : 'border-gray-300'
            }`}
          ></div>
        )}
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center ">
      {displaySteps}
    </div>
  );
};

export default Stepper;
