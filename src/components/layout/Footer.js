import React, {Fragment} from 'react';
import ShareButton from '../Share/ShareButton';


const Footer = () => (
    <Fragment>       
    <hr />
        <div className="row pl-sm-3">
            Aplicación web con uso del SDK de Facebook
            <ShareButton url="https://www.youtube.com/results?search_query=la+cotorrisa" 
            title="Videos con los que me entretengo" />
        </div>
    </Fragment>
);

export default Footer