import React from "react";
import CommentSection from "./CommentSection";
import Video from "./Video";
import VideoDescription from "./VideoDescripton";
import VideoStats from "./VideoStats";

function VideoSection ({ videoId }) {
    return (
        <>
            <Video videoId={videoId}/>
            <VideoStats videoId={videoId}/>
            <VideoDescription videoId={videoId}/>
            <CommentSection videoId={videoId}/>
        </>
    )
};

export default VideoSection;