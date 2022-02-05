import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import '../../../Utilities/chat.css'
import Message from './Message';

const Display = ({ chats, name }) => {
  return (
    <ScrollToBottom className='display'>
      {chats && chats.map((chat) => <Message key={name} message={chat} name={name}/>) }
    </ScrollToBottom>
  )
};

export default Display;
