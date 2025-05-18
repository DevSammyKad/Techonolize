import React from 'react';
import Banner from '../assets/images/banner-01.webp';
import CourseCards from './CourseCards';
import CourseData from '../json/course.json';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { useState } from 'react';
import ContactForm from './ContactForm';
import Logo2 from '../assets/images/ICIAlogo.png';

const Hero = () => {
  const [showModal, setshowmodal] = useState(false);

  const closeModal = () => setshowmodal(false);

  return (
    // bg-gradient-to-b from-white to-indigo-100
    <div className=" pb-20 relative">
      <div className="w-4/5 mx-auto relative">
        <div className="grid grid-cols-3 space-y-10 ">
          <div className="col-span-3 lg:col-span-2 ">
            <h1 className="max-w-max text-5xl leading-none mt-20 max-xl:mt-10">
              The Future of Work is
              <br />
              <span
                style={{
                  background: 'linear-gradient(35deg, purple, blue)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI-powered.
              </span>
              &nbsp;Are You?
            </h1>

            <h3 className="max-w-lg my-10">
              The industry is evolving at breakneck speed, driven by Artificial
              Intelligence. At Y.A.S.H, we equip working professionals with the
              advanced skills they need to not just survive, but thrive in this
              new landscape.
            </h3>
            <h4 className=" text-start max-w-lg my-10">
              Our focus?{' '}
              <span
                className=""
                style={{
                  background: 'linear-gradient(35deg, purple, blue)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Harnessing the power of AI to make you irreplaceable.
              </span>
            </h4>
            <h4>
              Join us and transform yourself into a future-proof professional.
            </h4>
            <div className="flex justify-start items-center mt-10 space-x-20">
              <div>
                <img
                  src={Logo2}
                  width={130}
                  height={100}
                  alt=""
                  className="flex "
                />
              </div>
              <div>
                <img src={Logo} width={250} height={100} alt="" />
              </div>
            </div>

            <div className="flex max-sm:block items-center space-x-10 max-sm:space-x-0">
              <Link to={'/courses'}>
                <button className="px-6 py-4 mt-10 text-white text-lg font-semibold bg-blue-500 hover:bg-purple-500 rounded-xl max-sm:text-sm ">
                  View All Courses
                </button>
              </Link>

              <div className="relative">
                <div className="w-5 h-5 absolute bg-green-500 rounded-full top-12 right-4 animate-ping "></div>
                <button
                  onClick={() => setshowmodal(true)}
                  id=""
                  className="  flex items-center mt-10 gap-3 px-10 py-4 bg-yellow-400 text-white transition-colors  text-lg font-semibold max-sm:text-sm border-2 rounded-lg border-sky-200 shadow-[0_0_20px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
                >
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
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  Register Now{' '}
                </button>
              </div>
              {showModal && <ContactForm closeModal={closeModal} />}
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 z-20">
            {Array(1)
              .fill()
              .map((_, index) => (
                <CourseCards key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
