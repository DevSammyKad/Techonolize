import React from 'react';
import { useState } from 'react';
import PlanModal from '../Components/utils/PlanModal';

const UpgradePage = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleModel = () => {
    setIsModelOpen(!isModelOpen);
  };
  const closeModal = () => {
    setIsModelOpen(false);
  };

  return (
    <div>
      UpgradePage
      <button onClick={handleModel}>Upgrade page</button>
      {isModelOpen && <PlanModal closeModal={closeModal} />}
      <div>fetchData</div>
    </div>
  );
};

export default UpgradePage;
