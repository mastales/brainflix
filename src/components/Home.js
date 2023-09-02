import React, { useEffect } from "react";
import HeaderNav from "./HeaderNav";
import Video from "./Video";
import VideoSection from "./VideoSection";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Home ({ api }) {
    const [videoId, setVideoId] = useState( "84e96018-4022-434e-80bf-000ce4cd12b8");
    // const [videoListContent, setVideoListContent] = useState([])

    // const { videoIdentity} = useParams();

    // useEffect(() => {
    //     axios
    //         .get(api + "/videos")
    //         .then((response) => {
    //             setVideoListContent(response.data); 
    //         })
    //         .catch((err) => console.log(err));
    // }, [api]);

    return (
        <>
            <Video videoId={videoId}/>
            <VideoSection videoId={videoId} setVideoId={setVideoId}/>
        </>
    )
}

export default Home