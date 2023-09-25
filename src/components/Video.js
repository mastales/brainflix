import React, { useEffect, useState } from "react";
import axios from "axios";

function Video({ api, videoId }) {
    const [videoData, setVideoData] = useState({});
    console.log('API_URL:', api); // should log http://localhost:8080 if correctly set in .env
    useEffect(() => {
        axios.get(`${api}/videos/${videoId}`)
            .then(response => {
                setVideoData(response.data);
            })
            .catch(err => console.log(err));
    }, [api, videoId]);

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
