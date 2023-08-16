import React, { useState } from "react";
import './Component/Component.scss';
import data from '../data/video-details.json';


function Video({ videoId }) {

    const videoData = data.filter((currentItem) => {
        return currentItem.id === videoId ? true : false;
    })
    
    return (
        <div>
            <div className="video">
                <img className="video__img" src={videoData[0].image} />
            </div>
            <div className="video__box">
                <h1 className="video__title">{videoData[0].title}</h1>
            </div>
        </div>
    )
}

export default Video;