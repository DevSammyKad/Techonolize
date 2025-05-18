import React, { useState } from 'react';
import personImg from '../assets/person.jpg';
import SearchBar from './SearchBar';
import CreatePost from './CreatePost';

const PostBar = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleClickModal = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <div className=" flex items-center justify-between p-5 ">
          <div className=" overflow-hidden">
            <img
              src={personImg}
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
          </div>
          {/* <div className="w-[70%]">
            <SearchBar placeholder="Whats in Your Mind" width="full" />
          </div> */}
          <div>
            <button
              onClick={handleClickModal}
              className="bg-blue-100 text-blue-500 rounded-lg px-4"
            >
              Share Post
            </button>
          </div>
        </div>

        {isCreatePostModalOpen && (
          <CreatePost handleClickModal={handleClickModal} />
        )}
      </div>
    </>
  );
};

export default PostBar;
