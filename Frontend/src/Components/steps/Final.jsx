import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

const Final = ({ finalData }) => {
  const { userData } = useContext(StepperContext);

  return (
    <div className="w-full mx-auto flex flex-col">
      <div className="grid gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Review Your Information
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Please review the information below before completing the onboarding
            process:
          </p>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-600 py-4">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">First Name:</span>{' '}
            {userData.firstName}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Last Name:</span>{' '}
            {userData.lastName}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Phone Number:</span>{' '}
            {userData.phoneNumber}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Bio:</span> {userData.bio}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Skills:</span>{' '}
            {userData.skills.join(', ')}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Tools:</span>{' '}
            {userData.tools.join(', ')}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Time Zone:</span>{' '}
            {userData.timeZone}
          </p>
        </div>
        {finalData.length > 0 && ( // Check if finalData exists and has content
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              Final Data
            </h3>
            {/* Display finalData elements here based on its structure */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Final;
