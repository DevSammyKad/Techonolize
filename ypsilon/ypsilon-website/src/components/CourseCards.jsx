import React from 'react';
import coursePoster1 from '../assets/images/course-01.webp';
import coursePoster3 from '../assets/images/course-03.png';
import courseImage2 from '../assets/images/course-04.png';

import Avatar2 from '../assets/images/Avatar2.jpg';
import CourseData from '../json/course.json';
import FiveStars from './FiveStars';
import { Link } from 'react-router-dom';

import DesignIntroduction from '../assets/Design-Introduction.pdf';

const downloadPDF = (fileUrl, fileName) => {
  // Fetch the PDF and trigger download
  fetch(fileUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = fileName;
      link.click();
    })
    .catch((error) => {
      console.error('Error downloading the file:', error);
    });
};

const CourseCards = () => {
  return (
    // Card

    <>
      {CourseData.map((item, index) => (
        <Link key={index} to={`/course/${item.Id}`}>
          <div className="bg-white mt-4 px-8 py-3  shadow-md rounded-2xl">
            <div className=" rounded-2xl ">
              {/* Image  */}
              <img src={courseImage2} alt="" className="rounded-2xl mt-5" />
            </div>
            {/* Rating  */}
            <div className="flex items-center mt-5">
              <FiveStars />
              <p className="ml-2"> ({item.ReviewsCount} Reviews)</p>
            </div>
            {/* Titile  */}
            <div className="mt-5">
              <h1 className="text-2xl">{item.CourseTitle}</h1>
            </div>
            <div className="flex space-x-5 my-3 mt-5">
              <p className="font-medium text-sm flex items-center gap-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="rgb(59 130 246)"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                {item.Lessons} Lessons
              </p>
              <p className="font-medium text-sm flex items-center gap-2 text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="rgb(236 72 153)"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                {item.StudentsEnrollCount} Students
              </p>
            </div>
            {/* Course Description */}
            <div>
              <p className="font-medium text-base my-5">
                {item.CourseOverview}
              </p>
            </div>
            {/* Instructor */}
            <div className="flex  items-center space-x-2">
              <div>
                <img
                  src={Avatar2}
                  className="rounded-full w-10 
              "
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
            {/* Pricing  */}
            <div className="my-5 flex items-center justify-between">
              <h1 className="font-semibold  text-3xl  text-green-500">
                ₹{item.DiscountedCourseFees}
                <span className="font-medium ml-2 text-base text-gray-500">
                  <del>₹{item.CourseFees}</del>
                </span>
              </h1>

              <button
                className="text-blue-500 font-semibold"
                onClick={() =>
                  downloadPDF(
                    DesignIntroduction,
                    'Instructional_Design_Introduction.pdf'
                  )
                }
              >
                Download PDF
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CourseCards;
