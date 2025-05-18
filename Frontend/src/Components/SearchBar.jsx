import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = ({ width, placeholder }) => {
  const getWidthClass = () => {
    switch (width) {
      case 'full':
        return 'w-full';
      case 'md':
        return 'w-48';
      default:
        return 'w-full';
    }
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 bg-gray-100 rounded-xl py-2 px-4 w-${getWidthClass()} ring-1 `}
      >
        <IoIosSearch
          style={{ fontSize: '20px', color: 'gray' }}
          className="flex  "
        />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent focus:ring-0 "
        />
      </div>
    </div>
  );
};

export default SearchBar;
