import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { FaAlignLeft } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TfiHelpAlt } from 'react-icons/tfi';
import brandLogo from '../assets/brandLogo.svg';
import brandLogoThree from '../assets/brandLogoThree.svg';
import personImg from '../assets/person.jpg';
import SearchBar from './SearchBar';
import HelpPopup from './utils/HelpPopup';
import MobileSidebar from './MobileSidebar';

const LoggedInNavbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleHelpModal = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  return (
    <div className="border sticky top-0 inset-x-0 bg-white h-20 z-50">
      <div className="flex mx-5 h-20 items-center justify-between max-sm:justify-between max-sm:gap-5">
        {/* Toggle Button */}
        <div className="flex items-center gap-10 max-sm:justify-between max-sm:flex">
          {/* Brand Icon */}
          <button className="lg:hidden p-0 " onClick={handleSidebarToggle}>
            <FaAlignLeft className="cursor-pointer text-2xl" />
          </button>

          <div className="flex items-center gap-2">
            <img
              src={brandLogoThree}
              className="w-14 h-14 max-sm:w-10 max-sm:h-10"
              alt="Brand Logo 1"
            />
            <img
              src={brandLogo}
              className="w-20 h-20 max-sm:w-15 max-sm:h-15"
              alt="Brand Logo 2"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex max-sm:hidden">
          <SearchBar placeholder="Search" width="w-full" />
        </div>

        {/* Notification and Help */}
        <div className="flex items-center gap-4">
          <button className="relative max-sm:hidden">
            <IoNotificationsOutline size="22" />
            <span className="bg-red-700 w-2 h-2 rounded-full absolute right-0 top-0 animate-pulse"></span>
          </button>
          <button onClick={toggleHelpModal} className="max-sm:hidden">
            <TfiHelpAlt size="22" />
          </button>
          {isHelpModalOpen && <HelpPopup closeModal={toggleHelpModal} />}

          {/* User Profile */}
          <div
            className="flex items-center cursor-pointer text-gray-500 leading-4 text-base font-normal p-4 rounded-lg"
            onClick={handleDropDown}
          >
            <img
              src={personImg}
              className="w-10 h-10 rounded-full object-cover"
              alt="User"
            />
            <div className="pl-2 max-sm:hidden">
              <h2 className="text-black text-lg font-medium">Sameer Kad</h2>
              <span className="text-gray-400 text-sm font-normal">
                Sammykad@gmail.com
              </span>
            </div>
            <IoIosArrowForward
              className={`ml-2 transition-transform ${
                isDropDownOpen ? 'rotate-180' : 'rotate-90'
              }`}
              size="18"
            />
          </div>
        </div>
      </div>
      <MobileSidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />

      {/* Dropdown Menu */}
      {isDropDownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default LoggedInNavbar;
