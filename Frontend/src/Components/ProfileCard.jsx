import React, { useState } from 'react';
import personImg from '../assets/person.jpg';
import Tools from '../Components/Tools';
import RocketImg from '../assets/rocket.png';
import SocialLinkModal from './utils/SocialLinkModal';
import { LuClipboardEdit } from 'react-icons/lu';
import SkillsInput from './SkillsInput';
import { StepperContext } from '../contexts/StepperContext';

const ProfileCard = () => {
  const [showModalOpen, setShowModalOpen] = useState(false);

  const closeModal = () => {
    setShowModalOpen(!showModalOpen);
  };
  return (
    <div>
      <div className="border bg-white p-10 rounded-xl shadow-md flex flex-col  justify-center">
        <div className="flex flex-col items-center justify-center ">
          <img
            src={personImg}
            alt=""
            className="w-36  h-36 rounded-full object-cover"
          />
          <h1 className="text-4xl my-5 font-semibold text-center ">
            Sammy kad
          </h1>

          <div className="flex justify-center">
            <button className="flex py-2 px-4 font-semibold bg-black text-white rounded-lg text-center items-center gap-2">
              <img src={RocketImg} className="w-6 " alt="" /> Get in Touch{' '}
            </button>
          </div>
        </div>
        <div className="my-5 space-y-5 divide-y-2">
          <div>
            <h6 className="text-xs text-gray-500 my-2">Rate</h6>
            <select
              name=""
              id=""
              className="border border-gray-500 py-2 px-4 rounded-md"
            >
              <option value="">Pune</option>4<option value="">Pune</option>
              <option value="">Pune</option>
              <option value="">Pune</option>
            </select>
          </div>
          <div>
            <h6 className="text-xs text-gray-500 my-2">Skills</h6>
            {/* <SkillsInput /> */}
            <p className="text-xs text-green-500 my-2">Add your skills here</p>
          </div>
          <div>
            <h6 className="text-xs text-gray-500 my-2">Tools</h6>
            <Tools />
          </div>
        </div>
        <div>
          <h5 className="my-3">About</h5>
          <p className="text-sm text-gray-500">
            Web Developer extraordinaire! I excel at delivering top-notch
            websites that not only have seamless mobile responsiveness but also
            incorporate effective SEO strategies. If you're looking for a
            freelancer who goes above and beyond, let's connect and create
            something amazing!
          </p>
          <h5 className="my-3">Location</h5>
          <select name="" id="">
            <option value="">Pune</option>
            <option value="">Pune</option>
            <option value="">Pune</option>
            <option value="">Pune</option>
          </select>
          <div className="flex justify-between items-center">
            <h5 className="my-3">Links</h5>
            <button onClick={() => setShowModalOpen(true)}>
              <LuClipboardEdit size={20} />
            </button>
          </div>
          {showModalOpen && <SocialLinkModal closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
