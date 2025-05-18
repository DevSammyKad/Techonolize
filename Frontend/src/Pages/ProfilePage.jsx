import React from 'react';
import ProfileCard from '../Components/ProfileCard';
import SkillsInput from '../Components/SkillsInput';

const ProfilePage = () => {
  return (
    <div>
      <div className="sm:w-full flex w-11/12  ">
        <div className="sm:w-full md:w-2/4   ">
          <ProfileCard />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
