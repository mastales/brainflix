import React from "react";
import { useState } from "react";
import likes from '../components/images/likes.svg';
import views from '../components/images/views.svg';
import './Component/Component.scss';
import Divider from "./Divider";
import data from '../data/video-details.json'

function VideoStats({ videoId }) {
    
    const videoData = data.filter((currentItem) => {
        return currentItem.id === videoId ? true : false;
    })
    
    const timestampDate = () => {
        let dateMs = videoData[0].timestamp;
        let date = new Date(dateMs);

        let month = `${date.getMonth() + 1}`.padStart(2, '0');
        let day = `${date.getDate() + 1}`;
        let year = date.getFullYear();

        return `${month}/${day}/${year}`;
    };
    
    return (
        <> 
            <hr className="divider__videoStats" />
            <div className="videoStats">
                <div className="videoStats__left">
                    <h3>By {videoData[0].channel}</h3>
                    <h4>{timestampDate()}</h4>
                </div>
                <div className="videoStats__right">
                    <p className="videoStats__views"><img src={views} /> {videoData[0].views}</p>
                    <p className="videoStats__likes"><img src={likes} /> {videoData[0].likes}</p>
                </div>
            </div>
            <Divider />
        </>
        
        
    )
}

export default VideoStats;


