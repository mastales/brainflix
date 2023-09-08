import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoSection from "./VideoSection";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home({ api, apiKey }) {
    const [videoListContent, setVideoListContent] = useState([]);
    const { videoIdentity } = useParams();
    const [videoId, setVideoId] = useState(videoIdentity || videoListContent[0]?.id);

    useEffect(() => {
        axios.get(`${api}/videos?api_key=${apiKey}`)
            .then(response => {
                setVideoListContent(response.data);
            })
            .catch(err => console.log(err));
    }, [api, apiKey]);

    return (
        <>
            <Video api={api} apiKey={apiKey} videoId={videoId} setVideoId={setVideoId} />
            <VideoSection api={api} apiKey={apiKey} videoId={videoId} setVideoId={setVideoId} />
        </>
    );
}

export default Home;
