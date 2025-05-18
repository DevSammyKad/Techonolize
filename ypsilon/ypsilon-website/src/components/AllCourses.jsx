import React from 'react';
import CourseCards from './CourseCards';
import CourseIcon from '../assets/images/Course-Icon.png';
import bg from '../assets/images/bg-image.jpg';
import BreadCrumb from './BreadCrumb';

const AllCourses = () => {
  return (
    // bg-gradient-to-b from-white from-1% via-sky-200 via-[percentage:20%_70%] to-blue-200 to-100%
    // style={{ backgroundImage: `url(${bg})` }}
    <div className="">
      <div className="">
        <div className="w-4/5 mx-auto  ">
          <div className="pt-10">
            <BreadCrumb />
          </div>
          <div className="flex space-x-5 items-center my-10">
            <h1> All Courses</h1>
            <span className="bg-blue-200 text-blue-600 px-6 py-2  text-sm border-2 border-white rounded-2xl font-semibold flex items-center">
              <img src={CourseIcon} className="w-5 h-5 mr-2" alt="" />3 Courses
            </span>
          </div>
          <p className="text-lg ">
            Courses that help beginner designers become true unicorns.
          </p>
          {/* Toggle Grid and List  AND Search and Filte       */}
          <div className="flex items-center justify-between my-10">
            {/* Toggle Grid and List  */}
            <div className="flex items-center space-x-3 bg-blue-200 px-6 py-2 rounded-3xl ">
              <div className="flex justify-center items-center space-x-5 gap-2 bg-white px-4 py-1 rounded-3xl cursor-pointer text-blue-500 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none "
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Grid
              </div>
              <div className="flex justify-center items-center space-x-5 gap-2  px-4 py-1 rounded-3xl cursor-pointer hover: ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                List
              </div>
            </div>
            {/* Search and Filter */}
            <div className="flex items-center space-x-5 max-sm:hidden ">
              <div>
                <input
                  type="text"
                  className="border-white border-2 rounded-2xl px-6 py-2 bg-transparent placeholder:text-white placeholder:font-semibold text-base outline-none focus:border-blue-400"
                  placeholder="Search Your Course"
                />
              </div>
              <div className="flex">
                <button className="bg-white px-6 p-3 rounded-2xl flex items-center gap-3 text-base">
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
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 pb-20">
            {Array(3)
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

export default AllCourses;
