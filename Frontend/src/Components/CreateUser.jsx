import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CreateUser = () => {
  const [activeTab, setActiveTab] = useState('Accounts');
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    bio: '',
    availability: false,
    rate: '',
    location: '',
    languages: [],
    linkedin: '',
    github: '',
    twitter: '',
    profilePhoto: '',
  });

  const [image, setImage] = useState(null);

  const saveImage = async () => {
    const uploadData = new FormData();
    uploadData.append('file', image);
    uploadData.append('upload_preset', 'skillrays');

    try {
      if (image === null) {
        return toast.error('Please Upload Image');
      }
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/sammyskillrays/image/upload',
        {
          method: 'POST',
          body: uploadData,
        }
      );

      const cloudData = await res.json();
      console.log(cloudData.url);
      return cloudData.url;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading image');
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://16.170.65.225:8080/user/all');
        const data = response.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          firstName: data.firstName,
          lastName: data.lastName,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let imageUrl = formData.profilePhoto;

      if (image) {
        imageUrl = await saveImage();
      }

      if (imageUrl) {
        const updatedFormData = { ...formData, profilePhoto: imageUrl };
        const response = await axios.post(
          'http://16.170.65.225:8080/user/new',
          updatedFormData
        );
        console.log(response.data);
        toast.success('User created successfully');
      } else {
        toast.error('Failed to upload image');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error creating user');
    }
  };

  return (
    <>
      <div className="p-5">
        <div className="mx-4 sm:mx-8 xl:mx-auto">
          <h1 className="border-b py-6 text-xl font-semibold">Settings</h1>
          <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
            <div className="relative my-4 w-56 sm:hidden">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-1"
                id="select-1"
              />
              <label
                htmlFor="select-1"
                className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
              >
                {activeTab}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                {[
                  'Accounts',
                  'Profile',
                  'Billing',
                  'Notifications',
                  'Integrations',
                ].map((tab) => (
                  <li
                    key={tab}
                    className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 hidden sm:block">
              <ul>
                {[
                  'Accounts',
                  'Profile',
                  'Billing',
                  'Notifications',
                  'Integrations',
                ].map((tab) => (
                  <li
                    key={tab}
                    className={`mt-5 cursor-pointer border-l-2 px-2 py-2 font-semibold transition ${
                      activeTab === tab
                        ? 'border-l-blue-700 text-blue-700'
                        : 'border-transparent hover:border-l-blue-700 hover:text-blue-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
              {activeTab === 'Accounts' && (
                <div className="pt-4">
                  <h1 className="py-2 text-2xl font-semibold">
                    Account settings
                  </h1>
                  <hr className="mt-4 mb-8" />
                  <p className="py-2 text-xl font-semibold">Email Address</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-gray-600">
                      Your email address is{' '}
                      <strong>john.doe@company.com</strong>
                    </p>
                    <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                      Change
                    </button>
                  </div>
                  <hr className="mt-4 mb-8" />
                  <p className="py-2 text-xl font-semibold">Password</p>
                  <div className="flex items-center">
                    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                      <label htmlFor="login-password">
                        <span className="text-sm text-gray-500">
                          Current Password
                        </span>
                        <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                          <input
                            type="password"
                            id="current-password"
                            className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="***********"
                          />
                        </div>
                      </label>
                      <label htmlFor="new-password">
                        <span className="text-sm text-gray-500">
                          New Password
                        </span>
                        <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                          <input
                            type="password"
                            id="new-password"
                            className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="***********"
                          />
                        </div>
                      </label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </div>
                  <p className="mt-2">
                    Can't remember your current password.{' '}
                    <a
                      className="text-sm font-semibold text-blue-600 underline decoration-2"
                      href="#"
                    >
                      Recover Account
                    </a>
                  </p>
                  <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
                    Save Password
                  </button>
                  <hr className="mt-4 mb-8" />

                  <div className="mb-10">
                    <p className="py-2 text-xl font-semibold">Delete Account</p>
                    <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Proceed with caution
                    </p>
                    <p className="mt-2">
                      Make sure you have taken backup of your account in case
                      you ever need to get access to your data. We will
                      completely wipe your data. There is no way to access your
                      account after this action.
                    </p>
                    <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
                      Delete This Account
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 'Profile' && (
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-between items-center">
                    <h1 className="py-2 text-2xl font-semibold">
                      Profile Settings
                    </h1>
                    <button
                      type="submit"
                      onClick={saveImage}
                      className="bg-purple-200 text-purple-800 py-2 px-4 rounded-lg"
                    >
                      Update
                    </button>
                  </div>
                  <hr className="mt-4 mb-8" />
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                    <div className="mb-5">
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your username"
                        value={formData.username}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            username: event.target.value,
                          })
                        }
                        // required
                      />
                    </div>
                    <div className="flex items-center max-sm:mb-5">
                      <div className="shrink-0 ">
                        {image ? (
                          <img
                            src={image ? URL.createObjectURL(image) : ''}
                            alt="Preview"
                            className="h-16 w-16 object-cover rounded-full"
                          />
                        ) : (
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"
                            alt="Current profile photo"
                            className="h-16 w-16 object-cover rounded-full"
                          />
                        )}
                      </div>
                      <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          onChange={(e) => setImage(e.target.files[0])}
                          className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                    <div className="">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            firstName: event.target.value,
                          })
                        }
                        // required
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            lastName: event.target.value,
                          })
                        }
                        // required
                      />
                    </div>
                  </div>

                  <div className=" my-5">
                    <label
                      htmlFor="bio"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="A short bio about yourself"
                      value={formData.bio}
                      onChange={(event) =>
                        setFormData({ ...formData, bio: event.target.value })
                      }
                      // required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 my-5">
                    <div className="mb-5">
                      <label
                        htmlFor="availability"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Availability
                      </label>
                      <select
                        id="availability"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.availability}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            availability: event.target.value === 'true',
                          })
                        }
                        // required
                      >
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="rate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Rate
                      </label>
                      <input
                        type="number"
                        id="rate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Hourly rate"
                        value={formData.rate}
                        onChange={(event) =>
                          setFormData({ ...formData, rate: event.target.value })
                        }
                        // required
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your location"
                      value={formData.location}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          location: event.target.value,
                        })
                      }
                      // required
                    />
                  </div>
                </form>
              )}
              {activeTab === 'Billing' && (
                <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <form action="#">
                      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="Apple iMac 27&ldquo;"
                            placeholder="Type product name"
                            required=""
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="brand"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Brand
                          </label>
                          <input
                            type="text"
                            name="brand"
                            id="brand"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="Apple"
                            placeholder="Product brand"
                            required=""
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="2999"
                            placeholder="$299"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option selected="">Electronics</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="item-weight"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Item Weight (kg)
                          </label>
                          <input
                            type="number"
                            name="item-weight"
                            id="item-weight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="15"
                            placeholder="Ex. 12"
                            required=""
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Write a product description here..."
                          >
                            Standard glass, 3.8GHz 8-core 10th-generation Intel
                            Core i7 processor, Turbo Boost up to 5.0GHz, 16GB
                            2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of
                            GDDR6 memory, 256GB SSD storage, Gigabit Ethernet,
                            Magic Mouse 2, Magic Keyboard - US
                          </textarea>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          type="submit"
                          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Update product
                        </button>
                        <button
                          type="button"
                          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >
                          <svg
                            className="w-5 h-5 mr-1 -ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Delete
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
