import React, { useEffect, useState } from "react";
import axios from "axios";
import views from "./images/views.svg";
import likes from "./images/likes.svg";
import Divider from "./Divider";

function VideoStats({ api, apiKey, videoId }) {
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        axios.get(`${api}/videos/${videoId}?api_key=${apiKey}`)
            .then(response => {
                setVideoData(response.data);
            })
            .catch(err => console.log(err));
    }, [api, apiKey, videoId]);

    const timestampDate = (dateMs) => {
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
                    <h3>By {videoData.channel}</h3>
                    <h4>{timestampDate(videoData.timestamp)}</h4>
                </div>
                <div className="videoStats__right">
                    <p className="videoStats__views"><img src={views} alt="Views icon" /> {videoData.views}</p>
                    <p className="videoStats__likes"><img src={likes} alt="Likes icon" /> {videoData.likes}</p>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default VideoStats;
