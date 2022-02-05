import React from 'react';
import '../../../Utilities/chat.css'

const InfoBar = ({ room }) => {
  return (
    <div className='info-bar'>
        <div className="info-bar-room">
          <i className="fas fa-globe fa-2x"></i>&ensp;&ensp;
          <h2>{room}</h2>
        </div>
        
        <div>
          <a href="/" style={{color:'white'}}><i className="fas fa-times-circle fa-2x"></i></a>
        </div>
    </div>
  )
};

export default InfoBar;
