import React from 'react';
import PeopleProfileCard from '../Components/PeopleProfileCard';
import SearchBar from '../Components/SearchBar';
import { LuListFilter } from 'react-icons/lu';
import Stories from '../Components/Stories';
import PostBar from '../Components/PostBar';
import GetAllPosts from '../Components/GetAllPosts';

const DiscoverPage = () => {
  return (
    <div className="w-full mx-auto flex">
      <div className="flex w-full gap-5">
        <div className="w-full sm:w-full lg:max-w-[65%] ">
          <div>
            <Stories />
          </div>
          <div className="my-2">
            <PostBar />
          </div>
          <div>
            <GetAllPosts />
            <GetAllPosts />
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-5 rounded-xl  ">
          {/* Filter And SearchBar */}
          <div className="flex items-center justify-between w-full bg-white z-10 ">
            <div>
              <SearchBar
                placeholder="What service are you looking for today..."
                width="w-full"
              />
            </div>
            <div className="">
              <button className="outline-none ">
                <LuListFilter size={28} />
              </button>
            </div>
          </div>

          <PeopleProfileCard />
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
