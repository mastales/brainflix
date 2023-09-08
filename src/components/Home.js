import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoSection from "./VideoSection";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home({ api, apiKey }) {
    const { videoIdentity } = useParams();
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        axios.get(`${api}/videos?api_key=${apiKey}`)
            .then(response => {
                if (!videoId) {
                    setVideoId(response.data[0]?.id);
                }
            })
            .catch(err => console.log(err));
    }, [api, apiKey, videoId]);
    
    return (
        <>
            <Video api={api} apiKey={apiKey} videoId={videoId} setVideoId={setVideoId} />
            <VideoSection api={api} apiKey={apiKey} videoId={videoId} setVideoId={setVideoId} />
        </>
    );
}

export default Home;
