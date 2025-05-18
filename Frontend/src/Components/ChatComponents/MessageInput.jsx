import React, { useState } from 'react';

const MessageInput = ({
  onSendMessage,
  onAttachFile,
  onSendAudio = () => {},
}) => {
  const [message, setMessage] = useState('');

  // Handle sending a text message
  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  // Handle attaching a file
  const handleAttachFile = (e) => {
    onAttachFile(e.target.files[0]);
  };

  // Handle voice recording (placeholder logic)
  const handleVoiceRecording = () => {
    // Placeholder for the voice recording logic
    // This would be implemented with a library or API for recording audio
    const audioMessage = 'Recorded Audio Message'; // This should be the actual audio data
    onSendAudio(audioMessage);
  };
  return (
    <div className="p-4 border-t flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-gray-100">
      <input
        type="file"
        onChange={handleAttachFile}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer flex items-center justify-center"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.172 7l-6.414 6.414a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-7.071 7.071a6 6 0 108.485 8.485L20 13"
          ></path>
        </svg>
      </label>
      <div className="flex-1 flex items-center bg-white border border-black rounded p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 outline-none bg-transparent"
        />
        <button onClick={handleVoiceRecording} className="ml-2">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18.75V21m0 0a6 6 0 006-6v-4.5m-6 10.5a6 6 0 01-6-6v-4.5m12 0a6 6 0 00-6-6 6 6 0 00-6 6v4.5m12 0H6"
            ></path>
          </svg>
        </button>
      </div>
      <button
        onClick={handleSendMessage}
        className="p-2 bg-purple-500 text-white rounded"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m2 2H9a1 1 0 01-1-1v-6a1 1 0 011-1h8a1 1 0 011 1v4m-1 5.001l5-4.998-5-5.002"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MessageInput;
