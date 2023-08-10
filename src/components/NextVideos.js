import React from "react";
import userImg from '../components/images/comment_placeholder_img.png';

function NextVideos(){
    return (
        <>
        <div>
            <h1 className='nextUp__title'>Next Video</h1>
            <div className="nextUp">
                <div className="nextUp__left">
                    <img className="nextUp__img" src={userImg}/>
                </div>
                <div className="nextUp__right">
                    <h2>Video Title</h2>
                    <h3>Author Name</h3>
                </div>
            </div>
        </div>
        </>
    )
};

export default NextVideos;