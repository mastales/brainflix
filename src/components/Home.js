import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoSection from "./VideoSection";
import axios from "axios";

function Home({ api }) {
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        axios.get(`${api}/videos/`)
            .then(response => {
                if (!videoId) {
                    setVideoId(response.data[0]?.id);
                }
            })
            .catch(err => console.log(err));
    }, [api, videoId]);
    console.log('API_URL:', api); // should log http://localhost:8080 if correctly set in .env
    return (
        <>
            <Video api={api} videoId={videoId} setVideoId={setVideoId} />
            <VideoSection api={api} videoId={videoId} setVideoId={setVideoId} />
        </>
    );
}

export default Home;
