import React from 'react';
import ShareIcon from '../icons/message.png';
import './styles.css';

const ShareSend= ({url, title})=>{
    const onClick=()=>{
        if (!window.FB) return;
        
        window.FB.ui({
            method: 'send',
            link: url
          });
    };

    return(
        <span 
        onClick={onClick} 
        title="Enviar por Facebook"
        className="share-btn"
        >
            <img src={ShareIcon} alt={title}/>
        </span>
    );

};

export default ShareSend;