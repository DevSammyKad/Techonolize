import React from 'react';
import bg from '../assets/images/bg-image.jpg';
import BreadCrumb from './BreadCrumb';
import CourseData from '../json/course.json';
import FiveStars from './FiveStars';
import Stars from '../components/Stars';
import courseImage from '../assets/images/course-01.webp';
import courseImage1 from '../assets/images/course-03.png';
import courseImage2 from '../assets/images/course-04.png';

import TopSelling from '../assets/images/TopSelling.png';
import Star from '../assets/images/star.png';
import Avatar2 from '../assets/images/Avatar2.jpg';
import diploma from '../assets/images/diploma.png';
import CourseContentAccordion from './CourseContentAccordion';
import CourseOutlineAccordion from './CourseOutlineAccordion';

const SingleCourse = () => {
  return (
    <div>
      <div className=" h-full py-10 ">
        {/* BreadCrubms */}

        <div
        // style={{
        //   backgroundImage: `url(${bg})`,
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   // height: '700px',
        // }}
        >
          <div className=" w-4/5 mx-auto mt-10 max-xl:mt-0">
            <BreadCrumb />
          </div>
          <div className="grid grid-cols-3  w-4/5 mx-auto py-10">
            <div className="col-span-3 lg:col-span-2">
              {CourseData.map((item, index) => (
                <div key={index} className="py-3">
                  {/* Titile  */}
                  <div className="mb-10">
                    <h1 className="text-3xl lg:text-6xl">{item.CourseTitle}</h1>
                  </div>

                  {/* Course Description */}
                  <div>
                    <p className="font-medium text-base my-10 max-w-3xl">
                      {item.CourseOverview}
                    </p>
                  </div>
                  <div className="flex items-center mt-5 space-x-5">
                    <p className="bg-purple-200 px-6 py-2 rounded-2xl border-white border-2 flex items-center gap-5">
                      {' '}
                      <img src={diploma} width={25} alt="" />
                      Top Selling Course
                    </p>
                    {/* Rating  */}
                    <div className="block lg:flex items-center  ">
                      <FiveStars />
                      <p className="ml-2"> ({item.ReviewsCount} Reviews)</p>
                    </div>
                  </div>
                  {/* Instructor */}
                  <div className="flex items-center my-10  space-x-5">
                    <div>
                      <img
                        src={item.InstructorImage}
                        className="rounded-full w-10"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-500">
                        By{' '}
                        <span className="text-gray-900 text-base ">
                          {item.Instructor}
                        </span>{' '}
                        In {item.Field}
                      </p>
                    </div>
                  </div>
                  {/* Course Attribute */}
                  <div className="flex items-center space-x-5 pb-5">
                    <p className="flex items-center gap-2 font-semibold text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      {item.Language}
                    </p>
                    <p className="flex items-center gap-2 font-semibold text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 128 128"
                        id="certificate"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M97 37.00024H31a2 2 0 0 0 0 4H97a2 2 0 0 0 0-4zM99 49.00035a2.00011 2.00011 0 0 0-2-2H31a2 2 0 0 0 0 4H97A2.00011 2.00011 0 0 0 99 49.00035zM61 59.00044a2.00011 2.00011 0 0 0-2-2H31a2 2 0 0 0 0 4H59A2.00011 2.00011 0 0 0 61 59.00044zM29 78.00061a8 8 0 1 0 8-8.00007A8.00912 8.00912 0 0 0 29 78.00061zm12 0a4 4 0 1 1-4-4A4 4 0 0 1 41 78.00061z"></path>
                        <path d="M122,10H6a6.00659,6.00659,0,0,0-6,6.00005V98.0008a6.00659,6.00659,0,0,0,6,6.00005H66.598l2.85541-4H6a2.00261,2.00261,0,0,1-2-2V16.00005a2.00261,2.00261,0,0,1,2-2H122a2.00261,2.00261,0,0,1,2,2V98.0008a2.00261,2.00261,0,0,1-2,2H108.54724l2.85565,4H122a6.00659,6.00659,0,0,0,6-6.00005V16.00005A6.00659,6.00659,0,0,0,122,10Z"></path>
                        <path d="M82.908 107.33859L79.415 112.16987l-.39648-1.95607a2.66506 2.66506 0 0 0-.95508-1.72463 2.74677 2.74677 0 0 0-2.09277-.59669l-2.502.252 3.809-5.336a9.46512 9.46512 0 0 1-3.73444-1.65218L68.5127 108.203a2.62967 2.62967 0 0 0-.126 2.92776 2.72367 2.72367 0 0 0 2.68555 1.2754l4.22266-.42579.74414 3.67093a2.649 2.649 0 0 0 1.8916 2.22951A2.77118 2.77118 0 0 0 78.7334 118a2.74228 2.74228 0 0 0 2.21-1.1172l7.19647-9.9545a9.137 9.137 0 0 1-3.301.66926A7.492 7.492 0 0 1 82.908 107.33859zM104.45685 101.15616a9.46988 9.46988 0 0 1-3.73474 1.65211l3.80914 5.33617-2.502-.252a2.74508 2.74508 0 0 0-2.09277.59669 2.66506 2.66506 0 0 0-.95508 1.72463l-.39648 1.9551-3.49969-4.84031a8.3318 8.3318 0 0 1-5.22894-.40552l7.21008 9.97342A2.7281 2.7281 0 0 0 99.26563 118a2.7826 2.7826 0 0 0 .80371-.11914 2.649 2.649 0 0 0 1.8916-2.22951l.74414-3.67093 4.22266.42579a2.72041 2.72041 0 0 0 2.68555-1.2754 2.622 2.622 0 0 0-.1123-2.90921zM94.25488 103.42272a5.47411 5.47411 0 0 0 2.88672-2.96 5.68578 5.68578 0 0 1 .67383-1.0752 5.656 5.656 0 0 1 1.25879-.32422 4.40593 4.40593 0 0 0 4.27246-5.85552 5.68449 5.68449 0 0 1-.08008-1.31349 5.63277 5.63277 0 0 1 .79688-.95118A5.50049 5.50049 0 0 0 106 87.2507a5.50049 5.50049 0 0 0-1.93652-3.69242 5.76208 5.76208 0 0 1-.79395-.94337 5.54413 5.54413 0 0 1 .07715-1.3213 5.35008 5.35008 0 0 0-.59375-4.03715 5.37937 5.37937 0 0 0-3.67871-1.81838 5.76388 5.76388 0 0 1-1.25293-.32032 5.63617 5.63617 0 0 1-.68066-1.08009 5.46584 5.46584 0 0 0-2.88672-2.959 5.31633 5.31633 0 0 0-3.98535.68067A5.41777 5.41777 0 0 1 89 72.25056a5.41777 5.41777 0 0 1-1.26855-.49122 5.32409 5.32409 0 0 0-3.98633-.68067 5.47411 5.47411 0 0 0-2.88672 2.96 5.68578 5.68578 0 0 1-.67383 1.07521 5.656 5.656 0 0 1-1.25879.32422 5.37806 5.37806 0 0 0-3.67871 1.8174 5.35307 5.35307 0 0 0-.59375 4.03812 5.68449 5.68449 0 0 1 .08008 1.31349 5.63277 5.63277 0 0 1-.79687.95118A5.50049 5.50049 0 0 0 72 87.2507a5.50049 5.50049 0 0 0 1.93652 3.69242 5.76208 5.76208 0 0 1 .79395.94337 5.54414 5.54414 0 0 1-.07715 1.3213 4.40669 4.40669 0 0 0 4.27246 5.85552 5.76388 5.76388 0 0 1 1.25293.32032 5.63617 5.63617 0 0 1 .68066 1.08009 5.46584 5.46584 0 0 0 2.88672 2.959 3.54046 3.54046 0 0 0 1.10156.17285 6.861 6.861 0 0 0 2.88379-.85352A5.41777 5.41777 0 0 1 89 102.25083a5.41777 5.41777 0 0 1 1.26855.49122A5.32409 5.32409 0 0 0 94.25488 103.42272zm-8.23047-4.29789a8.67953 8.67953 0 0 1-1.04.44043 8.40349 8.40349 0 0 1-.61133-1.01368 5.34375 5.34375 0 0 0-4.708-3.419 8.50778 8.50778 0 0 1-1.1416-.26758 8.43541 8.43541 0 0 1 .09766-1.15235 6.89791 6.89791 0 0 0-.08594-3.06155 6.68237 6.68237 0 0 0-1.69727-2.461 7.58053 7.58053 0 0 1-.80371-.93946 7.58053 7.58053 0 0 1 .80371-.93946 6.68237 6.68237 0 0 0 1.69727-2.461 6.90255 6.90255 0 0 0 .08594-3.06253 8.56752 8.56752 0 0 1-.09766-1.15235 8.66472 8.66472 0 0 1 1.1416-.2666 5.33667 5.33667 0 0 0 4.708-3.419 8.35425 8.35425 0 0 1 .61133-1.01368 8.67953 8.67953 0 0 1 1.04.44043 5.50212 5.50212 0 0 0 5.95117 0 8.67953 8.67953 0 0 1 1.04-.44043 8.40349 8.40349 0 0 1 .61133 1.01368 5.34375 5.34375 0 0 0 4.708 3.419 8.50778 8.50778 0 0 1 1.1416.26758 8.43541 8.43541 0 0 1-.09766 1.15235 6.89791 6.89791 0 0 0 .08594 3.06155 6.68236 6.68236 0 0 0 1.69727 2.461 7.58053 7.58053 0 0 1 .80371.93946 7.58053 7.58053 0 0 1-.80371.93946 6.68236 6.68236 0 0 0-1.69727 2.461 6.90255 6.90255 0 0 0-.08594 3.06253 8.56752 8.56752 0 0 1 .09766 1.15235 8.66472 8.66472 0 0 1-1.1416.2666 5.33667 5.33667 0 0 0-4.708 3.419 8.35425 8.35425 0 0 1-.61133 1.01368 8.67953 8.67953 0 0 1-1.04-.44043 5.50212 5.50212 0 0 0-5.95117 0z"></path>
                        <path d="M96,87.2507a7,7,0,1,0-7,7.00006A7.00852,7.00852,0,0,0,96,87.2507Zm-7,3a3,3,0,1,1,3-3A3.00329,3.00329,0,0,1,89,90.25073Z"></path>
                        <path d="M116,96.00078a4.004,4.004,0,0,0,4-4V22.00011a4.004,4.004,0,0,0-4-4H12a4.004,4.004,0,0,0-4,4V92.00074a4.004,4.004,0,0,0,4,4H70.60736a11.50419,11.50419,0,0,1,.0108-2.749,13.3832,13.3832,0,0,1-1.01721-1.251H12V37.57837l15.41406-15.4142a1.96161,1.96161,0,0,0,.134-.16406H100.4519a1.96162,1.96162,0,0,0,.134.16406L116.00067,37.579l.00226,54.4217h-7.60425a13.42292,13.42292,0,0,1-1.01685,1.251,11.50411,11.50411,0,0,1,.0108,2.749ZM12,31.92207v-9.922h9.92188Zm94.07813-9.922H116l.00043,9.92239Z"></path>
                      </svg>
                      {item.Certification}
                    </p>
                  </div>
                </div>
              ))}

              {/* ///////////////////////////////////// */}
              {/* Course Details */}
              <div className="w-11/12">
                {/* Image  */}
                <div className=" rounded-2xl my-2 ">
                  <img
                    src={courseImage2}
                    alt=""
                    className="rounded-2xl mt-5 w-full"
                  />
                </div>
                {/* Course OverView */}
                <div className="bg-white rounded-xl shadow-xl p-5 my-5">
                  <h1 className="text-indigo-500 text-3xl">Course Overview</h1>
                  <p className="font-normal text-lg text-slate-500 leading-normal my-5">
                    The programme aims to equip trainers, course creators &
                    e-content developers to understand and implement the
                    pedagogical aspects into content writing and delivery to the
                    learners
                  </p>
                </div>
                {/* Course Highlights */}
                {CourseData.map((course) => (
                  <div
                    className="bg-white rounded-xl shadow-xl p-5 my-5"
                    key={course.Id}
                  >
                    <h1 className="text-indigo-500 text-3xl">
                      Course Highlights
                    </h1>
                    <ul>
                      {course.CourseHighlights.map((highlight, index) => (
                        <div key={index} className="flex space-x-5 my-5">
                          <div>
                            <img src={Star} alt="" />
                          </div>
                          <div>
                            <li className="flex">{highlight.li}</li>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* What's In It for You? */}
                {CourseData.map((course) => (
                  <div
                    className="bg-white rounded-xl shadow-xl p-5 my-5"
                    key={course.Id}
                  >
                    <h1 className="text-indigo-500 text-3xl">
                      What's In It for You?
                    </h1>
                    <ul>
                      {course["What's In It for You?"].map((item, index) => (
                        <div key={index} className="flex space-x-5 my-5">
                          <div>
                            <li className="flex">{item.list}</li>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Who Is This Course For? */}
                {CourseData.map((course) => (
                  <div
                    className="bg-white rounded-xl shadow-xl p-5 my-5"
                    key={course.Id}
                  >
                    <h1 className="text-indigo-500 text-3xl">
                      Who Is This Course For?
                    </h1>
                    <ul>
                      {course['Who Is This Course For?'].map((item, index) => (
                        <div key={index} className="flex space-x-5 my-5">
                          <div>
                            <Stars />
                          </div>
                          <div>
                            <li className="flex">{item.list}</li>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Course Content */}
                {/* <div>
                  <CourseContentAccordion />
                </div> */}
                {/* Course Outline */}
                <div>
                  <CourseOutlineAccordion />
                </div>

                {/* Instructor */}
                {CourseData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-10 bg-white rounded-xl shadow-xl p-5 my-5"
                  >
                    <div>
                      <img
                        src={Avatar2}
                        width={500}
                        height={500}
                        className="rounded-full"
                        alt="Instructor"
                      />{' '}
                    </div>
                    <div>
                      <h1>{item.Instructor}</h1>
                      <p className="font-normal text-lg text-slate-800 leading-normal mt-2">
                        {item.Field}
                      </p>
                      <p className="font-normal text-lg text-slate-500 leading-normal my-5">
                        {item.InstructorInfo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 rounded-2xl z-10 ">
              <div className="sticky top-0 min-h-0 overflow-hidden ">
                {CourseData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-blue-600 border-2 rounded-xl"
                  >
                    <div className="p-4">
                      <div>
                        <img
                          src={courseImage2}
                          width={500}
                          height={200}
                          className="rounded-xl"
                          alt=""
                        />
                      </div>
                      {/* Pricing  */}
                      <div className="my-5 flex items-center justify-between">
                        <h1 className="font-semibold  text-3xl  text-green-500">
                          ₹{item.DiscountedCourseFees}
                          <span className="font-medium ml-2 text-base text-gray-500">
                            <del>₹{item.CourseFees}</del>
                          </span>
                        </h1>
                        <p className="flex items-center gap-3 bg-green-50 text-green-500 font-semibold text-base rounded-xl py-2 px-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          Upcoming
                        </p>
                      </div>
                      <div className="flex items-center justify-between font-medium text-gray-600 text-base ">
                        <h1 className="font-medium text-gray-600 text-base my-4 ">
                          Start Date
                        </h1>
                        <span className="text-sm bg-slate-100 p-2 rounded-xl">
                          {item.StartDate}
                        </span>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between font-medium text-gray-600 text-base ">
                        <h1 className="font-medium text-gray-600 text-base my-4 ">
                          Enrolled
                        </h1>
                        <span className="text-sm bg-slate-100 p-2 rounded-xl">
                          {item.StudentsEnrollCount}
                        </span>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between font-medium text-gray-600 text-base ">
                        <h1 className="font-medium text-gray-600 text-base my-4 ">
                          Lessons
                        </h1>
                        <span className="text-sm bg-slate-100 p-2 rounded-xl">
                          {item.Lessons}
                        </span>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between font-medium text-gray-600 text-base ">
                        <h1 className="font-medium text-gray-600 text-base my-4 ">
                          Language
                        </h1>
                        <span className="text-sm bg-slate-100 p-2 rounded-xl">
                          {item.Language}
                        </span>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between font-medium text-gray-600 text-base ">
                        <h1 className="font-medium text-gray-600 text-base my-4 ">
                          Certificate
                        </h1>
                        <span className="text-sm bg-slate-100 p-2 rounded-xl">
                          {item.IsCertificateAvailable}
                        </span>
                      </div>
                      <div className="text-center space-y-5 bg-gray-100 my-5 py-5 rounded-xl">
                        <p className="font-medium text-sm text-gray-500">
                          For details about the course
                        </p>
                        <button className="bg-purple-100 text-gray-700 border-white border-2  text-lg font-semibold px-6 py-2 rounded-2xl">
                          Call Us :{' '}
                          <span className="text-blue-500">+91 98814 09638</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
