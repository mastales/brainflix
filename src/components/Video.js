import React, { useEffect, useState } from "react";
import axios from "axios";

function Video({ api, apiKey, videoId }) {
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        axios.get(`${api}/videos/${videoId}?api_key=${apiKey}`)
            .then(response => {
                setVideoData(response.data);
            })
            .catch(err => console.log(err));
    }, [api, apiKey, videoId]);

    return (
        <div>
            <div className="video">
                <img className="video__img" src={videoData.image} alt="Video thumbnail" />
            </div>
            <div className="video__box">
                <h1 className="video__title">{videoData.title}</h1>
            </div>
        </div>
    );
}

export default Video;
