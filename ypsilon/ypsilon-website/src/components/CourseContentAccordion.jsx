import React, { useState } from 'react';
import CourseData from '../json/course.json';
// import { useState } from 'react';

function CourseContentAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-5 my-5 ">
      <h1 className="text-indigo-500 text-3xl mb-8">Course Content</h1>
      {CourseData.map((course) => (
        <div key={course.Id}>
          <h2 className="text-start text-2xl font-semibold ">
            {course.CourseTitle}
          </h2>

          {course.CourseContent.map((module, index) => (
            <div key={module.id} className="accordion-item my-10">
              <header
                className="accordion-header flex justify-between items-center my-2"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold">{module.Title}</h3>
                <span className="cursor-pointer">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </header>

              {activeIndex === index && (
                <div className="accordion-content">
                  <p className="text-sm font-semibold text-gray-500">
                    {module.Content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CourseContentAccordion;
