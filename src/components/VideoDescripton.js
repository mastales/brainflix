import React, { useEffect, useState } from "react";
import axios from "axios";

function VideoDescription({ api, videoId }) {
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        axios.get(`${api}/videos/${videoId}/`)
            .then(response => {
                setVideoData(response.data);
            })
            .catch(err => console.log(err));
    }, [api, videoId]);

    return (
        <div className="video__description">
            <p>{videoData.description}</p>
        </div>
    );
}

export default VideoDescription;
