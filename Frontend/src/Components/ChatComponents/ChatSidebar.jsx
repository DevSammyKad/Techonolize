import React, { useState } from 'react';
import {
  FaComments,
  FaFilter,
  FaEnvelopeOpen,
  FaEnvelope,
  FaUsers,
  FaDraftingCompass,
} from 'react-icons/fa';

// Sample contact data
const sampleContacts = [
  {
    name: 'John Doe',
    message: 'Task completed',
    time: '10:45 AM',
    labels: ['Work'],
  },
  {
    name: 'Jane Smith',
    message: 'Send me payment link',
    time: '11:00 AM',
    labels: ['Finance'],
  },
  {
    name: 'Alex Johnson',
    message: "Let's connect at 11pm",
    time: '1:15 PM',
    labels: ['Meeting'],
  },
  {
    name: 'Emily Davis',
    message: 'Great editing',
    time: '2:30 PM',
    labels: ['Feedback'],
  },
  {
    name: 'Michael Brown',
    message: 'Project discussion at 5',
    time: '3:45 PM',
    labels: ['Meeting'],
  },
];

const ChatSidebar = ({ contacts = sampleContacts, setCurrentContact }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering contacts based on search term
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="lg:w-1/4 md:w-1/3 sm:w-full bg-purple-100 p-4 border border-black text-gray-800">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Messages</h2>
        <div className="flex space-x-4">
          <button className="p-2 text-purple-600 border border-black rounded">
            <FaComments />
          </button>
          <div className="relative">
            <button
              className="p-2 text-purple-600 border border-black rounded"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FaFilter />
            </button>
            {filterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-black rounded shadow-lg transition-transform transform-gpu duration-300 ease-in-out">
                <h3 className="p-2 bg-purple-200 text-purple-800 font-semibold rounded-t">
                  Filter chats by
                </h3>
                <ul>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
                    <FaEnvelopeOpen />
                    <span>Read Messages</span>
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
                    <FaEnvelope />
                    <span>Unread Messages</span>
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
                    <FaUsers />
                    <span>Groups</span>
                  </li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center space-x-2">
                    <FaDraftingCompass />
                    <span>Drafts</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search messages"
        className="w-full p-2 mb-4 border rounded border-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact, index) => (
            <div
              key={index}
              onClick={() => setCurrentContact(contact)}
              className="flex items-center p-2 mb-2 bg-white rounded cursor-pointer"
            >
              <div className="flex-shrink-0 mr-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                  alt={contact.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-purple-700">
                    {contact.name}
                  </h3>
                  <span className="text-sm text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-purple-600">{contact.message}</p>
                <div className="flex space-x-2 mt-1">
                  {contact.labels.map((label, labelIndex) => (
                    <span
                      key={labelIndex}
                      className="px-2 py-1 bg-gray-200 text-xs rounded"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No contacts available</p>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
