import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { SidebarList } from '../constants/SidebarData';
import personImg from '../assets/person.jpg';
import Avtar from '../assets/Avtar.png';

const MobileSidebar = ({ isMobileSidebarOpen, handleSidebarToggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
    handleSidebarToggle();
  };

  return (
    <div
      className={`h-screen w-72 flex flex-col z-10 justify-between shadow-md pl-1 bg-white border-r border-border-stroke ${
        isMobileSidebarOpen ? '' : 'hidden'
      }`}
    >
      <div className="h-auto flex flex-col justify-between bg-white">
        <div className="mt-5">
          <p className="ml-5 text-gray-light leading-3 text-sm font-semibold p-1">
            Main
          </p>

          {SidebarList.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={() => handleActiveIndex(index)}
            >
              <div
                className={`${
                  activeIndex === index ? 'bg-purple-200 text-purple-700' : ''
                } flex items-center cursor-pointer text-gray-500 leading-4 text-base font-normal p-4 rounded-lg my-5 mx-3 ease-in-out hover:text-purple-600 hover:bg-purple-100`}
              >
                <item.icon className="w-6 h-6 mx-3" />
                <span className="text-base flex opacity-100 transition-transform delay-1000 font-semibold">
                  {item.heading}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center cursor-pointer text-gray-500 leading-4 text-base font-normal p-4 rounded-lg my-5 ease-in-out hover:bg-gray-200">
          <div>
            <img
              src={personImg ?? Avtar}
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="text-base flex opacity-100 transition-transform delay-1000 font-semibold">
            <div className="pl-2">
              <h2 className="text-black text-base font-medium"> Sameer Kad </h2>
              <div className="flex gap-2 items-center">
                <span className="text-gray-400 text-sm font-normal">
                  Sammykad@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div>
            <HiOutlineLogout className="ml-3 hover:text-red-600" size="28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
