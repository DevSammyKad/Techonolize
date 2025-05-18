import React from 'react';
import Banner from '../assets/images/banner-01.webp';
import CourseCards from './CourseCards';
import CourseData from '../json/course.json';
import { Link } from 'react-router-dom';
const Hero2 = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-600 pb-20 relative">
      <div className=" absolute -bottom-60 left-0 w-full h-full z-20 max-xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height="100%"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(249 250 251)" stopOpacity="1" />
              <stop
                offset="100%"
                stopColor="rgb(249 250 251)"
                stopOpacity="1"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            className="absolute "
            d="M0,32L26.7,53.3C53.3,75,107,117,160,165.3C213.3,213,267,267,320,261.3C373.3,256,427,192,480,160C533.3,128,587,128,640,112C693.3,96,747,64,800,69.3C853.3,75,907,117,960,144C1013.3,171,1067,181,1120,176C1173.3,171,1227,149,1280,165.3C1333.3,181,1387,235,1413,261.3L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-4/5 mx-auto relative">
        <div className="grid grid-cols-3 max-xl:space-y-10">
          <div className="col-span-1 max-md:col-span-3 max-xl:col-span-3">
            <h1 className="max-w-lg text-5xl leading-none mt-40">
              Build The Skills <br /> To&nbsp;
              <span
                style={{
                  background: 'linear-gradient(35deg, purple, blue)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Drive Your Career.
              </span>
            </h1>

            <h3 className="max-w-lg my-10">
              Hey legends! Ready to rock your skill game? Dive into the
              awesomeness of learning on our turf – where skills
              meet good vibes!!
            </h3>
            <Link to={'/courses'}>
              <button className="sm:text-sm px-6 py-2 text-blue-500 md:text-lg font-semibold bg-blue-100 rounded-xl ">
                View All Courses
              </button>
            </Link>
          </div>
          <div className=" max-xl:hidden col-span-1  relative">
            <div className="absolute top-28 z- left-2">
              <img src={Banner} alt="" width={550} />
            </div>
          </div>
          <div className="col-span-1 max-md:col-span-3 max-xl:col-span-3 z-20">
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

export default Hero2;
