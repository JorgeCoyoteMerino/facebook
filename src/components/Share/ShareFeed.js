import React from 'react';
import ShareIcon from '../icons/share2.png';
import './styles.css';

const ShareFeed= ({url, title})=>{
    const onClick=()=>{
        if (!window.FB) return;
        
        window.FB.ui({
            method: 'feed',
            link: url
          });
    };

    return(
        <span 
        onClick={onClick} 
        title="compartir en Feed de Facebook"
        className="share-btn"
        >
            <img src={ShareIcon} alt={title}/>
        </span>
    );

};

export default ShareFeed;