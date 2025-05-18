import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import personImg from '../assets/person.jpg';
import toast, { Toaster } from 'react-hot-toast';
import FilePreview from './FilePreview';

const CreatePost = ({ handleClickModal }) => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > 2000000) {
      setErrorMessage(
        'File size is greater than 2Mb. Please select a smaller file.'
      );
      toast.error('File size is greater than 2Mb');
      console.log('Fille size is : ', selectedFile.size);
      return;
    }
    toast.success('File selected successfully');
    console.log('Fille size is : ', selectedFile.size);
    setFile(selectedFile);
    setErrorMessage(null);
  };
  console.log(file);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed flex justify-center items-center z-[999] top-0 right-0 left-0   mx-auto overflow-y-auto overflow-x-hidden md:inset-0 opacity-100 bg-black/30 backdrop-blur-sm shadow-lg "
    >
      {/* Model Content  */}
      <div className="bg-white p-10 rounded-2xl w-[800px]">
        {/* Model Header  */}
        <div className="flex items-center  justify-between cursor-pointer  text-purbg-purple-500 leading-4 text-base font-normal p-4 rounded-lg  my-5 ease-in-out w-full  ">
          <div className="flex items-center ">
            <div className="">
              <img
                src={personImg}
                className="
                  w-10 h-10 
                 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="ml-2">
              {' '}
              <h2 className="text-black text-lg font-medium"> Sameer Kad </h2>
              <div className="flex gap-2 items-center">
                <span className="text-gray-400 text-sm font-normal">
                  Sammykad@gmail.com
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClickModal}
            className="hover:bg-gray-200 hover:text-gray-900 text-gray-500  rounded-full "
          >
            <IoClose size={22} className="" />
          </button>
        </div>
        {/* Model Body  */}
        <div>
          {/* <Editor
          apiKey="wd2gaeu2snhl8an354c09vqitvilu4l2thpvhisek8hsdbq9"
          init={{
            plugins:
              'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',

            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject('See docs to implement AI Assistant')
              ),
          }}
          initialValue="Write here about Post!!"
        /> */}
        </div>
        <form action="">
          <div>
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              What's on your mind?
            </label>
            <textarea
              id="bio"
              // onChange={handleChange}
              // value={userData['bio'] || ''} /
              rows="4"
              name="bio"
              className="block p-2.5 outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Write a caption (max 250 characters)"
            ></textarea>

            <div className="mt-2 mb-5 ">
              <p className="leading-normal text-sm text-gray-700">
                Have a story to tell? Your voice matters! Share your experiences
                and inspire others with your post.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-purple-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG or JPG ( Max Size : 2MB )
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={onFileSelect}
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add tags for your post
            </label>
            <textarea
              id="bio"
              // onChange={handleChange}
              // value={userData['bio'] || ''} /
              rows="4"
              name="bio"
              className="block p-2.5 outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Add a Tags #firstPost #endregion #love #technology"
            ></textarea>

            <div className="mt-2 mb-5 ">
              <p className="leading-normal text-sm text-gray-700">#endregion</p>
            </div>
          </div>

          {/* Model Footer*/}

          {file ? (
            <FilePreview file={file} removeFile={() => setFile(null)} />
          ) : null}
          <div className="flex items-center justify-end mx-8">
            <button
              disabled={!file}
              className="cursor-pointer mt-5  text-center text-lg font-normal hover:bg-purple-800  bg-purple-500 rounded-xl text-white px-4"
            >
              Share Post
            </button>
          </div>
        </form>
        <Toaster />
      </div>
    </motion.div>
  );
};

export default CreatePost;
