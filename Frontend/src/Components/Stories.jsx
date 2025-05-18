import React from 'react';
import Avtar from '../assets/Avtar.png';
import Plus from '../assets/plus.png';
import personImg from '../assets/person.jpg';

const Stories = () => {
  const StoriesData = [
    { avtar: Avtar, name: 'Sameer kad' },
    { avtar: Avtar, name: 'Sameer kad' },
    { avtar: Avtar, name: 'Sameer kad' },
    { avtar: Avtar, name: 'Sameer kad' },
    { avtar: Avtar, name: 'Sameer kad' },
    { avtar: Avtar, name: 'Sameer kad' },
  ];
  const profileData = [
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
        'https://media.licdn.com/dms/image/D4D03AQGGUYgBqEBmGA/profile-displayphoto-shrink_200_200/0/1691762257324?e=1720051200&v=beta&t=jnAxvtT4mu9J9rMtFZL01FIBpkqBezWCWmmGtLyI0Vw',
      name: 'Muskan shaik',
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
      image:
        'https://media.licdn.com/dms/image/D5603AQEUsPGxK2GBWQ/profile-displayphoto-shrink_200_200/0/1685502726855?e=1720051200&v=beta&t=AiaCwm3SBb06sSdbl2tdZmTrwXJc-arQQzQUjMwlaAc',
      name: 'Clerk',
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
        'https://media.licdn.com/dms/image/D4D03AQHxwA3lES6WPg/profile-displayphoto-shrink_200_200/0/1671112987719?e=1720051200&v=beta&t=zxBr0O09rkYh03iZ_RqT8wwYzCzOLJtcc5THwVVZ39Y',
      name: 'Disha arora',
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
        'https://media.licdn.com/dms/image/D4D03AQHIhLmlxbXMYg/profile-displayphoto-shrink_200_200/0/1713200635040?e=1720051200&v=beta&t=DasMiDIgVXRe2A5TAaHVmZw9LI0XY-gxl7f2S9cl3C8',
      name: 'Sakshi Agarwal',
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
        'https://media.licdn.com/dms/image/D4D03AQHIhLmlxbXMYg/profile-displayphoto-shrink_200_200/0/1713200635040?e=1720051200&v=beta&t=DasMiDIgVXRe2A5TAaHVmZw9LI0XY-gxl7f2S9cl3C8',
      name: 'Sakshi Agarwal',
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
  ];

  return (
    <>
      <div className="bg-white rounded-xl py-4 overflow-x-auto scrollbar-hide flex">
        <div className="flex">
          <div className="space-x-2 p-2 cursor-pointer relative flex flex-col items-center flex-shrink-0 ">
            <img
              className=" w-24 h-24 max-sm:w-16 max-sm:h-16 rounded-full object-cover border-2 border-lime-300 p-1 hover:border-gray-100"
              src={Avtar}
              alt=""
            />
            <button className="absolute w-12 bottom-5 right-0 z-0">
              <img src={Plus} alt="" />
            </button>
            <p className="text-xs text-center font-medium">Your Story</p>
          </div>

          <div className="flex ">
            {profileData.map((item, index) => (
              <div
                key={index}
                className="space-x-2 p-2 cursor-pointer flex flex-col items-center flex-shrink-0"
              >
                <img
                  className="w-24 h-24  max-sm:w-16 max-sm:h-16 rounded-full object-cover border-4 border-gray-300   hover:border-gray-100 "
                  src={item.image}
                  alt=""
                />
                <p className="text-xs text-center font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
