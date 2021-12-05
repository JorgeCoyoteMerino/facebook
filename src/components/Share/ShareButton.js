import React from 'react';
import ShareIcon from '../icons/share.png';
import './styles.css';

const ShareButton = ({url, title})=>{
    const onClick=()=>{
        if (!window.FB) return;
        
        window.FB.ui({
            method: 'share',
            href: url
          });
    };

    return(
        <span 
        onClick={onClick} 
        title="Compartir en Facebook"
        className="share-btn"
        >
            <img src={ShareIcon} alt={title}/>
        </span>
    );
};
export default ShareButton;
