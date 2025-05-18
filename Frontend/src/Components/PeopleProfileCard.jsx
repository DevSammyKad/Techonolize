import React from 'react';
import { motion } from 'framer-motion';

import personImg from '../assets/person.jpg';
import CoverImg from '../assets/Cover.png';
import SKillImg from '../assets/skill.png';
import VerifiedImg from '../assets/verified.png';
import StarImg from '../assets/star.png';
import reactImg from '../assets/react.svg';
import afterEffect from '../assets/after-effects.png';
import figma from '../assets/figma.png';
import premierePro from '../assets/premiere-pro.png';
import NewJoinImg from '../assets/NewJoin.png';
import heartImg from '../assets/heart.png';
import InfiniteScroll from 'react-infinite-scroll-component';

// Add active or not active status

const PeopleProfileCard = () => {
  const profileData = [
    {
      id: '123456',
      username: 'SammyKad',
      image:
        'https://media.licdn.com/dms/image/C4D03AQHQWXB15ONmWg/profile-displayphoto-shrink_200_200/0/1668002609171?e=1719446400&v=beta&t=25AlNhFtne7V7ZO29sxVsrdAAZfu_t14MZvA_u2TReo',
      name: 'Prathmesh Sutar',
      email: 'ria@example.com',
      bio: 'Experienced freelance web developer with a passion for creating responsive, user-friendly websites.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      tools: ['Figma', 'ReactJs'],
      availability: true,
      Hourly_rate: 50,
      location: 'New York, NY',
      proBadge: false,
      verifiedBadge: false,
      newBadge: true,
      CreatorBadge: true,
      ClientFavoriteBadge: true,
    },
    {
      id: '123456',
      username: 'SammyKad',
      image: personImg,
      name: 'Sammy Kad',
      email: 'ria@example.com',
      bio: ' Web Developer extraordinaire! I excel at delivering top-notch websites that not only have seamless mobile responsiveness but also incorporate effective SEO strategies.',
      skills: ['HTML', 'CSS', 'Figma', 'React.js'],
      tools: ['Figma', 'ReactJs'],
      availability: false,
      Hourly_rate: 50,
      location: 'Pune, NY',
      proBadge: true,
      verifiedBadge: true,
      newBadge: true,
    },
    {
      id: '123456',
      username: 'SammyKad',
      image:
        'https://media.licdn.com/dms/image/C5603AQHUVAh0TK8zFQ/profile-displayphoto-shrink_200_200/0/1644295967377?e=1719446400&v=beta&t=P3YwfDFhiVdiSlW29AMonZNYXuNjIgrF01vPz-mdpRw',
      name: 'Priya Kadu',
      email: 'ria@example.com',
      bio: ' Web Developer extraordinaire! I excel at delivering top-notch websites that not only have seamless mobile responsiveness but also incorporate effective SEO strategies.',
      skills: ['HTML', 'CSS', 'Figma', 'React.js'],
      tools: ['Figma', 'ReactJs'],
      availability: false,
      Hourly_rate: 50,
      location: 'New York, NY',
      proBadge: true,
      verifiedBadge: true,
      newBadge: true,
      ClientFavoriteBadge: true,
    },
    {
      id: '123456',
      username: 'SammyKad',
      image:
        'https://media.licdn.com/dms/image/C4D03AQHQWXB15ONmWg/profile-displayphoto-shrink_200_200/0/1668002609171?e=1719446400&v=beta&t=25AlNhFtne7V7ZO29sxVsrdAAZfu_t14MZvA_u2TReo',
      name: 'Prathmesh Sutar',
      email: 'ria@example.com',
      bio: 'Experienced freelance web developer with a passion for creating responsive, user-friendly websites.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      tools: ['Figma', 'ReactJs'],
      availability: true,
      Hourly_rate: 50,
      location: 'New York, NY',
      proBadge: false,
      verifiedBadge: false,
      newBadge: true,
      CreatorBadge: true,
      ClientFavoriteBadge: true,
    },
    {
      id: '123456',
      username: 'SammyKad',
      image: personImg,
      name: 'Sammy Kad',
      email: 'ria@example.com',
      bio: ' Web Developer extraordinaire! I excel at delivering top-notch websites that not only have seamless mobile responsiveness but also incorporate effective SEO strategies.',
      skills: ['HTML', 'CSS', 'Figma', 'React.js'],
      tools: ['Figma', 'ReactJs'],
      availability: false,
      Hourly_rate: 50,
      location: 'Pune, NY',
      proBadge: true,
      verifiedBadge: true,
      newBadge: true,
    },
    {
      id: '123456',
      username: 'SammyKad',
      image:
        'https://media.licdn.com/dms/image/C5603AQHUVAh0TK8zFQ/profile-displayphoto-shrink_200_200/0/1644295967377?e=1719446400&v=beta&t=P3YwfDFhiVdiSlW29AMonZNYXuNjIgrF01vPz-mdpRw',
      name: 'Priya Kadu',
      email: 'ria@example.com',
      bio: ' Web Developer extraordinaire! I excel at delivering top-notch websites that not only have seamless mobile responsiveness but also incorporate effective SEO strategies.',
      skills: ['HTML', 'CSS', 'Figma', 'React.js'],
      tools: ['Figma', 'ReactJs'],
      availability: false,
      Hourly_rate: 50,
      location: 'New York, NY',
      proBadge: true,
      verifiedBadge: true,
      newBadge: true,
      ClientFavoriteBadge: true,
    },
  ];

  return (
    <InfiniteScroll
      dataLength={profileData.length} //This is important field to render the next data
      // next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      }
    >
      <motion.div className="overflow-y-auto">
        {profileData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-200/10 overflow-hidden hover:bg-indigo-50 border cursor-pointer duration-300 border-indigo-500 rounded-lg w-full max-sm:w-[330px] h-fit max-sm:h-fit shadow-lg flex my-10 scrolling"
          >
            {/* Profile Card */}
            <div className="flex  p-5 space-x-5">
              {/* Image  */}
              {/* <div className="flex items-start">
          <img
            src={CoverImg}
            className="w-96 h-40 object-cover flex items-start rounded-lg"
            alt=""
          />
        </div>
        {/* Details  */}
              <div className="">
                <div className="flex items-center">
                  <div className="bg-indigo-100 rounded-full">
                    <img
                      src={item.image}
                      className=" w-20 h-20 rounded-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-black text-lg font-medium">
                      {item.name}
                    </h2>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-400 text-sm font-normal">
                        Pune, India
                      </span>
                      <span
                        className={`${
                          item.availability === true
                            ? 'bg-green-500'
                            : 'bg-red-500'
                        } w-2 h-2 flex rounded-full`}
                      ></span>

                      <span
                        className={`${
                          item.availability === true
                            ? 'text-green-700 bg-green-100'
                            : 'text-red-700 bg-red-100'
                        } text-xs py-1 px-2 rounded-lg `}
                      >
                        {item.availability === true
                          ? 'Available'
                          : 'Unavailable'}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Expert In  */}
                <div className="mt-3 pl-1 flex">
                  <span className="text-gray-600 flex gap-2 ">
                    {/* Logo Designer | Website Designer */}
                    <span> {item.skills[0]}</span> |{' '}
                    <span> {item.skills[1]}</span>|
                    <span> {item.skills[2]}</span> |
                    <span> {item.skills[3]}</span>
                  </span>
                </div>
                {/* Badges  */}
                <div className="flex flex-wrap space-x-5 mt-3 pl-1">
                  {item.verifiedBadge && (
                    <div className="flex  items-center gap-2">
                      <img src={VerifiedImg} className="w-8" alt="" />
                      <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                        Verified
                      </span>
                    </div>
                  )}
                  {item.proBadge && (
                    <div className="flex  items-center gap-2">
                      <img src={StarImg} className="w-8" alt="" />
                      <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                        Pro
                      </span>
                    </div>
                  )}

                  {item.newBadge && (
                    <div className="flex  items-center gap-2">
                      <img src={NewJoinImg} className="w-8" alt="" />
                      <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                        New Member
                      </span>
                    </div>
                  )}
                  {item.ClientFavoriteBadge && (
                    <div className="flex  items-center gap-2">
                      <img src={heartImg} className="w-8" alt="" />
                      <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                        Client Favorite
                      </span>
                    </div>
                  )}
                </div>
                {/* {Intro } */}
                <div className="mt-3 pl-1">
                  <p className="inline-flex text-sm max-sm:max-w-[300px] text-gray-500 overflow-ellipsis max-h-24">
                    {item.bio}
                  </p>
                </div>
                {/* Skills */}
                <div className="mt-3 pl-1">
                  {/* <h2 className="text-sm font-semibold text-blue-500 flex items-center">
              SKILLS
            </h2> */}
                  <div className="flex flex-wrap gap-2 mt-5 ">
                    <span className="inline-flex  bg-blue-100 text-sm font-medium rounded-xl  py-1 px-4 text-black items-center gap-2">
                      <img src={afterEffect} className="w-6 h-6" alt="" />
                      Adobe
                    </span>
                    <span className="inline-flex bg-blue-100 text-sm font-medium rounded-xl  py-1 px-4 text-black items-center gap-2 ">
                      <img src={figma} alt="" className="w-6 h-6" /> Figma
                    </span>
                    <span className="inline-flex bg-blue-100 text-sm font-medium rounded-xl  py-1 px-4 text-black items-center gap-2">
                      <img src={reactImg} alt="" className="w-6 h-6" />
                      React js
                    </span>
                    <span className="inline-flex bg-blue-100 text-sm font-medium  rounded-xl  py-1 px-4 text-black items-center gap-2">
                      <img src={premierePro} alt="" className="w-6 h-6" />{' '}
                      Premiere Pro
                    </span>
                  </div>
                </div>
              </div>
              {/* {Hourly Rate} */}
              {/* <div className="flex flex-col ">
          <div className="flex flex-col mt-3">
            <h1 className="text-green-500 text-lg">Rs 200 - 3000</h1>
            <span className="text-sm text-gray-500">Hourly Rate</span>
          </div>
          <div className="bg-indigo-300  text-lg rounded-lg mt-5">
            <button className=" py-1 px-2 text-indigo-600 text-lg font-sm ">
              Hire Now
            </button>
          </div>
        </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </InfiniteScroll>
  );
};

export default PeopleProfileCard;
