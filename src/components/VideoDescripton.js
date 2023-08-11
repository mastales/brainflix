import React, { useState } from "react";
import './Component/Component.scss';
import data from '../data/video-details.json';

function VideoDescription() {
    const [videoId, setVideoId] = useState(
        "84e96018-4022-434e-80bf-000ce4cd12b8"
    );

    const videoData = data.filter((currentItem) => {
        return currentItem.id === videoId ? true : false;
    })
    
    return (
        <div className="video__description" >
            <p>{videoData[0].description}</p>
        </div>
    )
}

export default VideoDescription;