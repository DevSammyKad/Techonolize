import React from 'react';
import { FaVideo, FaPhone, FaSearch } from 'react-icons/fa';

const ChatWindow = ({ contact }) => {
  // Use a default profile picture URL
  const defaultProfilePicture =
    'https://cdn-icons-png.flaticon.com/512/145/145867.png';

  // If no contact is selected, prompt user to select a contact
  if (!contact)
    return <div className="flex-1 p-4">Select a contact to view messages</div>;
  return (
    <div className="flex-1 flex flex-col">
      {/* Add the bg-purple-500 class to apply purple background */}
      <div className="flex items-center justify-between p-4 border-b bg-purple-500">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            {/* Use the default profile picture URL */}
            <img
              src={defaultProfilePicture}
              alt={contact.name}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">{contact.name}</h2>
            <span className="text-sm text-white">Online</span>
          </div>
        </div>
        {/* Container for audio, video, and search icons */}
        <div className="flex items-center border border-black rounded-full">
          <button className="p-2 text-white rounded-full hover:bg-purple-200">
            <FaVideo />
          </button>
          <button className="p-2 text-white rounded-full hover:bg-purple-200">
            <FaPhone />
          </button>
          <button className="p-2 text-white rounded-full hover:bg-purple-200">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-scroll">
        {/* Messages would go here */}
      </div>
    </div>
  );
};

export default ChatWindow;
