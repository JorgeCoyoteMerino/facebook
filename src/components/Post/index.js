import React from 'react';
import ShareButton from '../Share/ShareButton';
import ShareSend from '../Share/ShareSend';
import ShareFeed from '../Share/ShareFeed';


const Post = () => (
    <div className="blog-post">
        <h2 className="blog-post-title">Publicación de Muestra</h2>
        <p className="blog-post-meta">07  oct 2021 </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus justo mi, ac mollis augue consequat et. Sed eget justo id diam finibus faucibus sit amet vitae metus. Aenean dignissim a felis et gravida. Vestibulum eget massa nec augue ullamcorper sodales eu non sapien. Nulla pellentesque commodo elit, ac volutpat metus eleifend eget. Duis et.
        </p>
        <div>
            <span>Compartir post:</span>
            <div className="social">
                <ShareButton
                    url="https://www.youtube.com/watch?v=PaoCQHwTPg4"
                    title="sample video post"
                />
                <ShareSend
                    url="https://www.youtube.com/watch?v=mxbsev38lLo"
                    title="sample video post"
                />
                <ShareFeed
                    url="https://www.youtube.com/watch?v=Wp6sbMRktes"
                    title="sample video post"
                />
            </div>
        </div>
    </div>
);

export default Post;