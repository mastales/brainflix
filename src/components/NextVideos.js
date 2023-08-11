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
                    <h4 className="nextUp__name" >Video Title</h4>
                    <p className="nextUp__author">Author Name</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default NextVideos;