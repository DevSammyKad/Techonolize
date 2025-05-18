import React from 'react';
import personImg from '../assets/person.jpg';
import Cover from '../assets/Cover.png';
import { FiMessageCircle } from 'react-icons/fi';
import { FiShare2 } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { IoBookmarkOutline } from 'react-icons/io5';

const GetAllPosts = () => {
  return (
    <>
      <div className="bg-white rounded-2xl my-10 px-5">
        <div className="flex items-center pl-2 my-2 mt-10">
          <div className="">
            <img
              src={personImg}
              className="
                  w-10 h-10 
                 rounded-full object-cover"
              alt=""
            />
          </div>
          <div className="ml-2">
            {' '}
            <h2 className="text-black  font-medium text-lg max-sm:text-sm ">
              {' '}
              Sameer Kad{' '}
            </h2>
            <div className="flex gap-2 items-center">
              <span className="text-gray-400 text-sm font-normal">
                Today 12PM
              </span>
            </div>
          </div>
        </div>
        <div className="p-3 ">
          <p className="leading-6 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
            laudantium? Repellendus sint reprehenderit soluta delectus ratione
            cum repellat asperiores commodi consectetur est amet perspiciatis
            fugiat, beatae hic ipsa recusandae vitae.{' '}
          </p>
          <div className="w-full h-72 overflow-hidden">
            <img
              src={Cover}
              alt=""
              className=" px-10 w-fit object-cover overflow-hidden my-10"
            />
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <button className="flex items-center gap-2 ">
            <FiMessageCircle className="w-5 h-5 hover:text-gray-400" />
            <p> Comments</p>
          </button>
          <button className="flex items-center gap-2 ">
            <FiHeart className="w-5 h-5 hover:text-gray-400" />
            <p> Like's</p>
          </button>
          <button className="flex items-center gap-2 ">
            <FiShare2 className="w-5 h-5 hover:text-gray-400" />
            <p> Share</p>
          </button>
          <button className="flex items-center gap-2 ">
            <IoBookmarkOutline className="w-5 h-5 hover:text-gray-400" />
            <p>Save</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default GetAllPosts;
