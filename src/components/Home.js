import React, { useEffect } from "react";
import Video from "./Video";
import VideoSection from "./VideoSection";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home ({ api }) {
    const [videoId, setVideoId] = useState( "84e96018-4022-434e-80bf-000ce4cd12b8");
    const [videoListContent, setVideoListContent] = useState([])

    const { videoIdentity } = useParams();

    const api_key = "e9ed2c9d-3bf5-4466-9379-cacefeb2f279";

    useEffect(() => {
        axios
            .get(api + "/videos")
            .then((response) => {
                setVideoListContent(response.data); 
            })
            .catch((err) => console.log(err));
    }, [api]);

    return (
        <>
            <Video videoId={videoId}/>
            <VideoSection videoId={videoId} setVideoId={setVideoId}/>
        </>
    )
}

export default Home

// "https://project-2-api.herokuapp.com"