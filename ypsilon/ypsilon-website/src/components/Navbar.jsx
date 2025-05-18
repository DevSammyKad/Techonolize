import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import { Navlinks } from '../constants/index';
import { Link } from 'react-router-dom';
import MAIN_LOGO from '../assets/images/MAIN-LOGO.png';
import '../style.css';
import YASH from '../assets/images/YASH.png';

<link
  href="https://fonts.cdnfonts.com/css/rocket-rinder"
  rel="stylesheet"
></link>;
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <header className="w-full bg-white z-50 backdrop-blur-lg ">
        <nav className="flex justify-between items-center w-4/5 mx-auto py-5 h-[120px] ">
          <Link to={'/'}>
            <div className="flex justify-center items-center ">
              <img src={MAIN_LOGO} width={120} alt="" />
              <img src={YASH} className="w-[350px] max-sm:w-[250px] " alt="" />
              {/* <h1
                className="text-blue-500 text-center max-sm:text-lg"
                style={{ fontFamily: 'Futura ND Display, sans-serif' }}
              >
                YPSILON ADVANCED SKILLS HUB <br /> (Y.A.S.H.)
              </h1> */}
            </div>
          </Link>
          <div>
            <ul className="flex flex-1 justify-center items-center gap-10 max-lg:hidden">
              {Navlinks.map((item) => (
                <li key={item.lable}>
                  <Link
                    onClick={handleClick}
                    to={item.href}
                    className="font-semibold text-lg leading-normal hover:text-blue-700 hover:underline-left-to-right"
                  >
                    {item.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden max-lg:block">
            <button onClick={toggleMenu} className="outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {showMenu && (
        <div className="bg-white py-2 w-4/5 mx-auto transition">
          {/* Add your menu items here */}
          <ul className="justify-center items-center ">
            {Navlinks.map((item) => (
              <li key={item.lable}>
                <Link
                  onClick={handleClick}
                  to={item.href}
                  className="font-semibold my-2 text-lg leading-normal hover:text-blue-700 hover:underline-left-to-right"
                >
                  {item.lable}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
