import React, { useState } from "react";
import './Component/Component.scss';
import data from '../data/video-details.json';


function Video() {
    const [videoId, setVideoId] = useState(
        "84e96018-4022-434e-80bf-000ce4cd12b8"
    )

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