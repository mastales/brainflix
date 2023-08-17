import React from "react";
import CommentSection from "./CommentSection";
import Video from "./Video";
import VideoDescription from "./VideoDescripton";
import VideoStats from "./VideoStats";
import NextVideos from "./NextVideos";

function VideoSection ({ videoId, setVideoId}) {
    return (
        <>
            <div className="div__left">
                <Video videoId={videoId}/>
                <VideoStats videoId={videoId}/>
                <VideoDescription videoId={videoId}/>
                <CommentSection videoId={videoId}/>
            </div>
            <div className="div__right">
                <NextVideos videoId={videoId} setVideoId={setVideoId}/>
            </div>
        </>
    )
};

export default VideoSection;