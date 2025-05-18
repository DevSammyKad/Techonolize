import React from 'react';
import caseImage from '../assets/case.png';
import { IoClose } from 'react-icons/io5';

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center pl-2 mt-5">
        <div className="">
          <img
            src={caseImage}
            className="
                  w-10 h-10 
                 rounded-full object-cover"
            alt="file"
          />
        </div>
        <div className="ml-2">
          <h2 className="text-black text-sm font-medium"> {file.name} </h2>
          <div className="flex gap-2 items-center">
            <span className="text-gray-400 text-sm font-normal">
              {file.type} / {(file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
        </div>
      </div>
      <div>
        <IoClose
          className="w-7 h-7 text-gray-400 hover:text-black cursor-pointer"
          onClick={() => removeFile()}
        />
      </div>
    </div>
  );
};

export default FilePreview;
