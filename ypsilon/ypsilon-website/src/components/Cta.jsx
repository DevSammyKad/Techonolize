import React, { useState } from 'react';
import cartoon from '../assets/images/cartoon.png';
import ContactForm from './ContactForm';
import { Toaster } from 'react-hot-toast';

const Cta = () => {
  const [showModal, setshowmodal] = useState(false);

  const closeModal = () => setshowmodal(false);

  return (
    <div className="bg-gradient-to-r from-red-100 to-blue-200 relative  py-20 my-20">
      <div className="w-4/5 mx-auto flex items-center ">
        <img
          src={cartoon}
          alt=""
          className="absolute hidden md:flex  -top-10 left-20 w-[400px] mix-blend-multiply"
        />
        <div className="md:ml-96 space-y-10 sm:ml-0  ">
          <h1 className="text-3xl max-w-4xl leading-none font-mono">
            Unlock your potential with skills that thrill! 🌟
          </h1>
          <button
            onClick={() => setshowmodal(true)}
            className=" flex items-center gap-3 px-10 py-4 rounded-lg bg-gradient-to-r from-purple-500  to-blue-500 text-white text-lg font-semibold"
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
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
            Contact Us{' '}
          </button>
        </div>
        {showModal && <ContactForm closeModal={closeModal} />}
      </div>

      <Toaster />
    </div>
  );
};

export default Cta;
