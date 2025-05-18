import React from 'react';
import NotFoundPage from './NotFoundPage';
// import '../aboutUs.css';
import AboutJPG from '../assets/images/AboutUs.jpg';
import star from '../assets/images/star.png';
import Avatar2 from '../assets/images/Avatar2.jpg';

const AboutUs = () => {
  return (
    <div>
      <div className="">
        <section>
          <div className="grid grid-cols-2 w-4/5 mx-auto relative my-10 pt-10">
            <div className=" max-md:hidden relative">
              <div className="rounded-full  ">
                <img
                  src={Avatar2}
                  alt=""
                  className="rounded-3xl absolute top-5 left-6 w-80 h-96"
                />
              </div>
            </div>
            <div className="max-md:col-span-2">
              <h5 className="bg-white  text-blue-500 text-base font-semibold px-6 py-2  inline-block rounded-xl  ">
                ABOUT US
              </h5>

              <h1 className="text-3xl my-5">
                Shaping the Future of AI with Skill Development Courses.
              </h1>
              <h3 className="text-lg text-gray-500 my-5">
                Welcome to Ypsilon, where we're dedicated to shaping the future
                of AI through our skill development courses. Our expertly
                crafted programs provide hands-on training and in-depth
                knowledge to help you excel in the dynamic field of
                artificial intelligence
              </h3>

              <ul>
                <li className="flex items-center my-5 text-lg font-semibold">
                  {' '}
                  <img src={star} alt="" className="mr-5" />
                  Hands-on training
                </li>
                <li className="flex items-center my-5 text-lg font-semibold">
                  {' '}
                  <img src={star} alt="" className="mr-5" />
                  In-depth knowledge of AI
                </li>
                <li className="flex items-center my-5 text-lg font-semibold">
                  {' '}
                  <img src={star} alt="" className="mr-5" />
                  Prepare for a career in the dynamic field of AI
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="about w-4/5 mx-auto">
          <h2 className="text-5xl  my-5 text-center py-5">About Us</h2>
          <p className="text-xl font-semibold my-10">
            YPsilon is dedicated to providing high-quality skill courses that
            empower individuals to enhance their knowledge and expertise.
          </p>
          <p className="text-lg  font-medium my-10">
            Our team of experienced instructors is passionate about sharing
            their expertise and helping learners achieve their goals. Whether
            you're a beginner looking to acquire new skills or a seasoned
            professional seeking to expand your knowledge, our courses are
            designed to meet your needs and exceed your expectations.
          </p>
          <p className="text-lg  font-medium my-10">
            At YPsilon, we believe in the transformative power of education to
            unlock opportunities and drive personal and professional growth. Our
            commitment to excellence, innovation, and continuous improvement
            ensures that our courses remain relevant and impactful in today's
            ever-changing world.
          </p>

          <div className="imagec flex justify-center my-10">
            <img src={AboutJPG} alt="Skill Courses Image" />
          </div>

          <div className="vision">
            <h3 className="text-center text-5xl">Our Vision</h3>
            <p className="text-lg font-medium my-10 py-10">
              "Our vision at YPsilon is to become the leading provider of skill
              courses, empowering individuals worldwide to thrive in their
              personal and professional endeavors. We envision a future where
              learning is accessible to all, enabling people to unlock their
              full potential and shape a brighter tomorrow. Through our
              innovative approach to education and unwavering commitment to
              quality, we aim to inspire lifelong learning and create positive
              change in the lives of our learners and communities."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
