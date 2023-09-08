import React, { useEffect, useState } from "react";
import axios from "axios";

function VideoDescription({ api, apiKey, videoId }) {
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        axios.get(`${api}/videos/${videoId}?api_key=${apiKey}`)
            .then(response => {
                setVideoData(response.data);
            })
            .catch(err => console.log(err));
    }, [api, apiKey, videoId]);

    return (
        <div className="video__description">
            <p>{videoData.description}</p>
        </div>
    );
}

export default VideoDescription;
