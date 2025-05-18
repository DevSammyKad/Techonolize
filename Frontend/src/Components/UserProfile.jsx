import React, { useEffect } from 'react';
import { UserProfileData } from '../constants/UserData';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const loggedInUserId = 4;

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const foundUser = UserProfileData.find(
          (user) => user.id === loggedInUserId
        );
        // console.log(foundUser);
        if (foundUser) {
          setUserData(foundUser);
        } else {
          throw new Error('User not found');
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [loggedInUserId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error :{error}</div>;
  }
  if (!userData) {
    return <div>No user data found</div>;
  }

  const {
    id,
    username,
    name,
    email,
    bio,
    profilePhoto,
    portfolios,
    skills,
    posts,
    rate,
    location,
    languages,
    linkedin,
    github,
    twitter,
    availability,
  } = userData;
  console.log(userData);

  const handleUpdateClick = () => {
    navigate('/profile/update'); // Programmatic navigation
  };
  return (
    <>
      {/* Cover Photo */}

      <div>
        <div className="h-56 w-full overflow-hidden object-cover">
          <img
            src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
            alt=""
            className="object w-full rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center cursor-pointer  text-gray-500 leading-4 text-base font-normal rounded-lg  my-5 ease-in-out">
            <div className="object-cover">
              <img
                src={profilePhoto}
                alt=""
                className="w-36 h-36 max-sm:w-12 max-sm:h-12 rounded-full object-cover"
              />
            </div>
            <div
              className={`text-base  flex  opacity-100 transition-transform delay-1000 font-semibold `}
            >
              <div className="pl-2">
                <h2 className="text-black text-base font-medium">
                  {' '}
                  {username}
                </h2>
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400 text-sm font-normal">
                    {email}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleUpdateClick}
              className="shadow-2xl py-2 px-2 text-xs bg-blue-400 text-white rounded-md "
            >
              Update Profile
            </button>

            <button className="shadow-2xl py-2 px-2 text-xs bg-black text-white rounded-md ">
              Direct Message
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="grid-cols-1">
            <div className="my-5">
              <div className="my-2">
                <p>Rate</p>
                <p className="text-sm bg-blue-100 inline-block rounded-xl py-1 px-4 my-2 text-blue-500 ">
                  {rate}
                </p>
              </div>
              <h5 className="text-lg">About Me</h5>
              <p className="text-xs text-gray-500 leading-5 [&:not(:first-child)]:mt-2">
                {bio}
              </p>
            </div>
            <div className="my-5">
              <p>Skills</p>
              {userData.skills &&
                userData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="mr-2 text-xs bg-blue-100 my-1 inline-flex flex-wrap rounded-lg py-1 px-4"
                  >
                    {skill}
                  </span>
                ))}
            </div>
            <div className="my-5">
              <p>Tools</p>
              {userData.tools &&
                userData.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="mr-2 text-xs bg-blue-100 my-1 inline-flex flex-wrap rounded-lg py-1 px-4"
                  >
                    {tool}
                  </span>
                ))}
            </div>
            <div className="my-5">
              <p>Badges</p>
              {/* Badges  */}
              {/* <div className="flex flex-wrap space-x-5 mt-3 pl-1">
                {item.verifiedBadge && (
                  <div className="flex  items-center gap-2">
                    <img src={VerifiedImg} className="w-8" alt="" />
                    <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                      Verified
                    </span>
                  </div>
                )}
                {item.proBadge && (
                  <div className="flex  items-center gap-2">
                    <img src={StarImg} className="w-8" alt="" />
                    <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                      Pro
                    </span>
                  </div>
                )}

                {item.newBadge && (
                  <div className="flex  items-center gap-2">
                    <img src={NewJoinImg} className="w-8" alt="" />
                    <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                      New Member
                    </span>
                  </div>
                )}
                {item.ClientFavoriteBadge && (
                  <div className="flex  items-center gap-2">
                    <img src={heartImg} className="w-8" alt="" />
                    <span className="inline-flex items-center  text-sm font-medium text-gray-800">
                      Client Favorite
                    </span>
                  </div>
                )}
              </div> */}
            </div>
          </div>

          {/* Projects */}
          <div className="grid-cols-1">
            {userData.portfolios &&
              userData.portfolios.map((portfolios, index) => (
                <div className="grid lg:grid-cols-2 gap-4 my-5" key={index}>
                  <div className="">
                    <div className="w-full h-36 rounded-2xl border-2 overflow-hidden">
                      <img
                        src={portfolios.projectImage}
                        className="w-full h-full overflow-hidden object-cover"
                        alt={`${portfolios.title}`}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <h4>{portfolios.title}</h4>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 leading-5 [&:not(:first-child)]:mt-2">
                        {portfolios.description}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        {portfolios.stack.map((stack, index) => (
                          <p
                            key={stack}
                            className="text-xs bg-slate-300 rounded-lg py-1 px-4 flex-wrap"
                          >
                            {stack}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
