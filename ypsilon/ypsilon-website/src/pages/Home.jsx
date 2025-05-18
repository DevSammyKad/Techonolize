import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import PopularCourses from '../components/PopularCourses';
import FeedBack from '../components/FeedBack';
import Cta from '../components/Cta';
import Hero2 from '../components/Hero2';

// import FeedBackTwo from '../components/FeedBackTwo';

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Hero />
      <WhyUs />
      <PopularCourses />
      <FeedBack />
      {/* <FeedBackTwo /> */}
      <Cta />
    </div>
  );
};

export default Home;
