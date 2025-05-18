import React from 'react';
import Avatar from '../assets/images/Avatar1.png';
import feedBack from '../json/feedBack.json';
import { FeedbackData } from '../constants';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const FeedBack = () => {
  return (
    <>
      <div className="mx-auto w-4/5 mt-40  ">
        <div className="text-start mt-20">
          <h5 className="bg-white text-blue-500 text-base font-semibold px-6 py-2  inline-block rounded-xl  ">
            LEARNERS FEEDBACK
          </h5>
        </div>
        <div className="relative">
          <div className="mt-5 ">
            <h1>
              What Our <span className="text-blue-500"> Learners </span>Say
            </h1>
            <p className="font-medium text-sm text-gray-400 my-5">
              Learning communicate to global world and <br /> build a bright
              future with our YPSILON.
            </p>
            {/* <button className="px-6 py-4 mt-10 text-white text-lg font-semibold bg-blue-400 hover:bg-blue-400 rounded-xl ">
            Contact Us
          </button> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col  ">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper w-4/5 flex gap-10 "
        >
          {FeedbackData.map((item, id) => (
            <SwiperSlide
              key={id}
              className="bg-white rounded-2xl mb-20 mt-10 shadow-md inline-block animate-scroll-left w-[250px] h-[300px]  text-ellipsis overflow-hidden"
            >
              <div className="flex items-center px-10 py-5">
                <div className="">
                  <img
                    src={item.Image}
                    className="rounded-full w-16   border-gray-400 border-2 p-1"
                    alt="Avtar"
                  />
                </div>
                <div className="ml-5">
                  <h1 className="text-lg mb-1">{item.FullName}</h1>
                  <p className="text-sm mt-1 text-gray-400">
                    {item.Designation}
                  </p>
                </div>
              </div>
              {/* PARAGRAFh */}
              <div>
                <p className="text-base font-medium text-gray-500 mb-5  text-start px-10  ">
                  {item.FeedBack}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeedBack;
