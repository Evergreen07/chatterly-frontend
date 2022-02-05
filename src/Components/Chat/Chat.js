import React, {useState, useEffect } from 'react'
import queryString from 'query-string'
import io, { Socket } from 'socket.io-client'
import '../../Utilities/chat.css'
import InfoBar from './ChatBox/InfoBar'
import Display from './ChatBox/Display';
import TextArea from './ChatBox/TextArea';
import Users from './Users';

const ENDPOINT = 'https://chatterly-backend.herokuapp.com/'
let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const {name, room} = queryString.parse(window.location.search);
    socket = io(ENDPOINT , { 
      cors: {
        origin: "https://chatterly-backend.herokuapp.com/",
        credentials: true
      },
      transports : ['websocket'] 
    });

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  },[ENDPOINT, window.location.search]);

  useEffect(() => {
      socket.on('adminMessage', (message) => {
        setChats([...chats, message])
      })
  });

  const sendMessage = (event) => {
    event.preventDefault();

    if(message){
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  //console.log("This chat", chats);

  return (
    <div className='chats'>
        <div className="chat-box">
          <InfoBar room={room}/>

          <Display chats={chats} name={name}/>

          <TextArea setMessage={setMessage} sendMessage={sendMessage} message={message}/>
        </div>
        {/* <Users/> */}
    </div>
  )
};

export default Chat;
