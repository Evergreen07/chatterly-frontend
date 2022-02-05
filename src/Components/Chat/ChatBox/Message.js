import React from 'react';
import '../../../Utilities/message.css'

const Message = ({message, name}) => {
    let isSendByThisUser = false;

    if(name === message.user){
        isSendByThisUser = true;
    }

    return (
        isSendByThisUser ? 
        (   
            <div className="messageContainer justifyEnd">
                <div className="messageBox backgroundDark">
                    <p className="messageText">{message.text}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="sentText">{message.user}</p>
                    <p className="colorDark messageText">{message.text}</p>    
                </div>
            </div>
        )
    )
};

export default Message;
