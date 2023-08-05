import React from "react";
import CommentSection from "./CommentSection";
import Video from "./Video";
import VideoDescription from "./VideoDescripton";
import VideoStats from "./VideoStats";

function VideoSection () {
    return (
        <>
            <Video />
            <VideoStats />
            <VideoDescription />
            <CommentSection />
        </>
    )
};

export default VideoSection;