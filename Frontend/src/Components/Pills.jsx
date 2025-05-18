import React from 'react';
import { IoClose } from 'react-icons/io5';

const Pills = ({ image, text, onClick }) => {
  return (
    <ul className="flex ">
      <li className="flex items-center justify-center px-2 bg-indigo-100 text-indigo-500 text-sm max-lg:text-xs rounded-lg cursor-pointer">
        <img src={image} className="w-6" alt="" />
        <p>{text}</p>
        <button
          onClick={(event) => {
            onClick(event);
            event.preventDefault();
          }}
        >
          <IoClose />
        </button>
      </li>
    </ul>
  );
};

export default Pills;
