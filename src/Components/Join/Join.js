import React, {useState} from 'react';
import Navbar from '../../Components/Layouts/Navbar'
import { Link } from 'react-router-dom';

import '../../Utilities/join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  
  return(
    <>
      <Navbar/>
      <div className='form-container'>
          <form action="" className="form">
              <div className="form-group">
                <span className="fas fa-user fa-lg"></span>
                <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="form-group">
                <span className="fas fa-key fa-lg"></span>
                <input type="text" placeholder='Enter room name' onChange={(e) => setRoom(e.target.value)}/>
              </div>

              <Link 
                onClick={(e) => (!name || !room) ? e.preventDefault() : null}
                to={`/chat?name=${name}&room=${room}`}
              >
                <button type="submit" className="button">Join Chat</button> 
              </Link>
          </form>
      </div>
    </>
  ) 
};

export default Join;
