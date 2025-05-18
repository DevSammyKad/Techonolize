import React, { useState } from 'react';
import ChatWindow from '../Components/ChatComponents/ChatWindow';
import ChatSidebar from '../Components/ChatComponents/ChatSidebar';
import MessageInput from '../Components/ChatComponents/MessageInput';

const ChatPage = () => {
  const [currentContact, setCurrentContact] = useState(null);

  // Placeholder functions to handle sending messages, attaching files, and sending audio messages
  const handleSendMessage = (message) => {
    console.log('Send message:', message);
  };

  const handleAttachFile = (file) => {
    console.log('Attach file:', file);
  };

  const handleSendAudio = (audioMessage) => {
    console.log('Send audio message:', audioMessage);
  };

  return (
    <div className="flex h-screen bg-gray-200 ">
      {/* Sidebar component to select a contact */}
      <ChatSidebar setCurrentContact={setCurrentContact} />
      <div className="flex flex-col flex-1">
        {/* ChatWindow component to display the selected contact's chat window */}
        <ChatWindow contact={currentContact} />
        {/* MessageInput component to input and send messages */}
        <MessageInput
          onSendMessage={handleSendMessage}
          onAttachFile={handleAttachFile}
          onSendAudio={handleSendAudio}
        />
      </div>
    </div>
  );
};

export default ChatPage;
