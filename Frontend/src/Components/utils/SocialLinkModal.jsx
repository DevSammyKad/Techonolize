import React, { useState } from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiLink } from 'react-icons/ri';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiGithubFill } from 'react-icons/ri';
import { RiTiktokFill } from 'react-icons/ri';
import { RiBehanceFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { RiDribbbleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const SocialLinkModal = ({ closeModal }) => {
  const LOGO_icons = [
    { icon: RiLinkedinBoxFill, label: 'LinkedIn' },
    // { icon: RiLink, label: 'Website' },
    { icon: RiFacebookCircleFill, label: 'Facebook' },
    { icon: RiInstagramLine, label: 'Instagram' },
    { icon: RiGithubFill, label: 'GitHub' },
    { icon: RiTiktokFill, label: 'TikTok' },
    { icon: RiBehanceFill, label: 'Behance' },
    { icon: RiDribbbleLine, label: 'Dribbble' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed flex justify-center items-center z-10 top-0 right-0 left-0   mx-auto overflow-y-auto overflow-x-hidden md:inset-0 opacity-100 bg-black/30 backdrop-blur-sm shadow-lg "
    >
      {/* Model Content  */}
      <div className="bg-white p-10 rounded-2xl max-w-xl">
        {/* Model Header  */}
        <div className="flex justify-between items-center ">
          <h5>Add Your External Links </h5>
          <button
            onClick={closeModal}
            className="hover:bg-gray-200 rounded-full "
          >
            <IoClose size={22} className="" />
          </button>
        </div>
        {/* Model Body  */}
        <div className=" my-5 flex justify-center gap-10 ">
          {LOGO_icons.map((item, index) => (
            <div
              key={index}
              className="flex text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <item.icon size={30} className="" />
            </div>
          ))}
        </div>
        <div className="my-10">
          <p className="px-10 leading-normal tracking-wider text-sm text-center ">
            Please include any links that highlight your work, achievements,
            personality, and other relevant information!
          </p>
        </div>
        <div className=" flex items-center justify-center my-10">
          <button className="px-4 bg-indigo-100 text-indigo-500 rounded-lg">
            Add Links
          </button>
        </div>
        <div className="w-9/12 mx-auto flex flex-col">
          <div className=" rounded-md py-2 focus:ring-1 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Paste here your URL"
              name="url"
              className="outline-none border border-gray-400 py-2 px-4 rounded-md"
            />
            <input
              type="text"
              placeholder="Link Name"
              name="LinkName"
              className="outline-none border border-gray-400 py-2 px-4 rounded-md"
            />
          </div>
          <div className="flex justify-center gap-10 mt-10">
            <button className="flex   bg-blue-100 rounded-lg text-blue-500 px-4">
              Save Link
            </button>
            <button
              onClick={closeModal}
              className="flex bg-red-100 text-red-500 rounded-lg px-4"
            >
              Discard
            </button>
          </div>
        </div>

        {/* Model Footer*/}
      </div>
    </motion.div>
  );
};

export default SocialLinkModal;
