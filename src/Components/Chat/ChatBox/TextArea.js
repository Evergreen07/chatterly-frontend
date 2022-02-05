import React from 'react';
import '../../../Utilities/chat.css';

const TextArea = ({ setMessage, sendMessage, message}) => {
  return (
    <div className='text-area'>
        <input 
          type="text"  
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
          placeholder={'Type your message...'}
        />
        <button className="sendButton" onClick={event => sendMessage(event)}>
          <i className="fas fa-paper-plane fa-lg"></i>
        </button>
    </div>
  )
};

export default TextArea;
