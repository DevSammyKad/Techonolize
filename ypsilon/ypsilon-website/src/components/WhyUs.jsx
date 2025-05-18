import React from 'react';

import exam from '../assets/images/exam.png';
import online from '../assets/images/online.webp';
import paper from '../assets/images/paper.webp';
import happy from '../assets/images/happy.png';

const WhyUs = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-1 lg:space-x-40 lg:grid-cols-2">
        <div className="mt-20">
          <div className="grid grid-cols-2 space-x-3 space-y-5">
            <div className="bg-white rounded-xl shadow-xl text-center px-5 py-5">
              <img
                src={happy}
                alt=""
                width={120}
                className="text-center mx-auto rounded-full"
              />
              <h1 className="text-2xl my-2">500+</h1>
              <h2 className="text-base text-gray-500 ">Happy Students</h2>
            </div>
            <div className="bg-white rounded-xl shadow-xl text-center px-5 py-5">
              <img
                src={exam}
                alt=""
                width={120}
                className="text-center mx-auto "
              />
              <h1 className="text-2xl my-2">50+</h1>
              <h2 className="text-base text-gray-500 ">Mock Tests</h2>
            </div>
            <div className="bg-white rounded-xl shadow-xl text-center px-5 py-5">
              <img
                src={online}
                alt=""
                width={120}
                className="text-center mx-auto "
              />
              <h1 className="text-2xl my-2">1000+</h1>
              <h2 className="text-base text-gray-500 ">Video Lectures</h2>
            </div>
            <div className="bg-white rounded-xl shadow-xl text-center px-5 py-5">
              <img
                src={paper}
                alt=""
                width={120}
                className="text-center mx-auto "
              />
              <h1 className="text-2xl my-2">100+</h1>
              <h2 className="text-base text-gray-500 ">Practice Papers</h2>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-span-1">
          <div className="text-start my-10">
            <h5 className="bg-red-100 text-red-500 text-lg font-semibold px-6 py-2  inline-block rounded-xl  ">
              WHY CHOOSE US
            </h5>
          </div>
          <div>
            <h1 className="text-[40px] leading-none mb-10">
              Creating A Community Of Life Long Learners.
            </h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              At <b>YASH</b>, we stand out with top-notch courses, personalized
              learning, and unwavering support. Our cutting-edge curriculum and
              interactive environment ensure a unique educational experience.
              Join us for more than just education – join us for a pathway to
              success.
            </p>
          </div>
          <div className="mt-10">
            <ul className="flex flex-col space-y-8">
              <li className="font-semibold text-lg flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#2F57EF"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                Flexible Classes
              </li>
              <li className="font-semibold text-lg flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#B966E7"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                Learn From Anywhere
              </li>
              <li className="font-semibold text-lg flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#DB7093"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                Unlimited Resources With Strong Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
