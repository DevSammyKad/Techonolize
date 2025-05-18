import React from 'react';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const HelpPopup = ({ closeModal }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed  flex justify-center items-center z-[999] top-0 right-0 left-0   mx-auto overflow-y-auto overflow-x-hidden md:inset-0 opacity-100 bg-black/30 backdrop-blur-sm shadow-lg "
      >
        {/* Model Content  */}
        <div className="bg-white p-10 rounded-2xl max-w-xl">
          {/* Model Header  */}
          <div className="flex justify-between items-center ">
            <h5>Leave a Issue </h5>
            <button
              onClick={closeModal}
              className="hover:bg-gray-200 hover:text-gray-900 text-gray-500  rounded-full "
            >
              <IoClose size={22} className="" />
            </button>
          </div>
          {/* Model Body  */}

          <div className="mb-2">
            <p className="leading-normal text-sm ">
              Your Email address will not be published
            </p>
          </div>

          <div className="w-full mt-5 mx-auto flex flex-col">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your issue here..."
              ></textarea>

              <div className="my-2">
                <p className="leading-normal text-sm text-gray-700">
                  Our support team will contact you as soon as possible.
                </p>
              </div>
            </div>

            <button className=" mt-5 flex items-center justify-center text-center text-lg font-normal hover:bg-gray-800  bg-gray-950 rounded-xl text-white px-4">
              Push Issue
            </button>
          </div>

          {/* Model Footer*/}
        </div>
      </motion.div>
    </>
  );
};

export default HelpPopup;
