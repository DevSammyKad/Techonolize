import React from 'react';
import { NavbarList } from '../constants/SidebarData';
import { Link } from 'react-router-dom';
import { FaAlignLeft } from 'react-icons/fa';
import brandLogo from '../assets/brandLogo.svg';
import brandLogoThree from '../assets/brandLogoThree.svg';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="border sticky top-0 inset-x-0 bg-white h-20">
      <div className="flex mx-5 h-20 items-center justify-between max-sm:justify-between max-sm:gap-5 ">
        {/* /Toggle Button */}
        <div className="flex items-center gap-10">
          <div className="lg:hidden">
            <FaAlignLeft
              style={{ fontSize: '25px', color: 'gray' }}
              className="cursor-pointer "
            />
          </div>
          {/* Brand Icon */}
          <div className="flex items-center gap-2">
            <img src={brandLogoThree} className="w-14 h-1w-14" alt="" />
            <img src={brandLogo} className="w-20 h-20" alt="" />
          </div>
        </div>

        {/* Ul List */}
        <div className=" flex basis-2/4 max-lg:hidden  ">
          <ul className="flex space-x-8 font-medium text-sm ">
            {NavbarList.map((item, index) => (
              <Link to={item.path} key={index}>
                <li className="text-red -tracking-tight leading-relaxed hover:text-gray-500 transition-colors duration-75">
                  {item.heading}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* SearchBar */}
        <div className=" flex basis-4/4 max-sm:hidden">
          <SearchBar placeholder="Search" />
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-black text-white rounded-xl px-4">
            {' '}
            Log in
          </button>
          <button className="hover:bg-zinc-700 hover:text-white rounded-xl px-4">
            {' '}
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
