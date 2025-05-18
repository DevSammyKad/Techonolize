import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { SidebarList } from '../constants/SidebarData';
import personImg from '../assets/person.jpg';
import Avtar from '../assets/Avtar.png';

const Sidebar = ({ isSidebarOpen }) => {
  const [isExpanded, setExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggleSidebar = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-screen max-lg:hidden flex  flex-col z-10 bg-white justify-between  shadow-md  ${
        isExpanded ? 'w-72' : 'w-fit'
      }  pl-1 bg-white  border-r border-border-stroke`}
    >
      <div className="h-auto flex flex-col  justify-between bg-white ">
        <div className="mt-5 ">
          <div className="relative flex gap-4 items-center">
            <div className="absolute -top-2 -right-5 bg-gray rounded-full shadow-2xl  flex items-center justify-center cursor-pointer">
              <button
                onClick={handleToggleSidebar}
                className="bg-gray-200 rounded-full outline-none"
              >
                {isExpanded ? (
                  <IoIosArrowForward className="rotate-180" size="18" />
                ) : (
                  <IoIosArrowForward className="" size="18" />
                )}
              </button>
            </div>
          </div>
          <p
            className={`${
              isExpanded ? 'ml-5' : 'ml-2'
            } text-gray-light leading-3 text-sm font-semibold p-1`}
          >
            Main
          </p>

          {SidebarList.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={` ${
                  activeIndex == index ? 'bg-purple-200 text-purple-700' : ''
                } flex items-center cursor-pointer  text-gray-500 leading-4 text-base font-normal p-4 rounded-lg  my-5 mx-3 ease-in-out hover:text-purple-600 hover:bg-purple-100`}
              >
                <item.icon
                  className={` ${
                    isExpanded ? 'w-6 h-6 mx-3' : 'w-6 h-6 mx-1'
                  } `}
                />
                <span
                  className={`text-base ${
                    isExpanded
                      ? 'flex  opacity-100 transition-transform delay-1000'
                      : 'hidden opacity-0'
                  }  font-semibold `}
                >
                  {item.heading}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* LOGIN Not showing */}
        {/* <div className="flex items-center cursor-pointer  text-gray-500 leading-4 text-base font-normal p-4 rounded-lg  my-5 ease-in-out hover:bg-gray-200 ">
          <div className="">
            <img
              src={personImg ?? Avtar}
              className={`${
                isExpanded ? 'w-10 h-10 ' : 'w-10 h-10 ml-1 '
              } w-10 h-10 rounded-full object-cover`}
              alt=""
            />
          </div>
          <div
            className={`text-base ${
              isExpanded
                ? 'flex  opacity-100 transition-transform delay-1000'
                : 'hidden opacity-0'
            }  font-semibold `}
          >
            <div className="pl-2">
              <h2 className="text-black text-base font-medium"> Sameer Kad </h2>
              <div className="flex gap-2 items-center">
                <span className="text-gray-400 text-sm font-normal">
                  Sammykad@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className={`${isExpanded ? '' : 'hidden'}`}>
            <HiOutlineLogout className="ml-3 hover:text-red-600" size="28" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
