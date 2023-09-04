import React from "react";
import CommentSection from "./CommentSection";
import VideoDescription from "./VideoDescripton";
import VideoStats from "./VideoStats";
import NextVideos from "./NextVideos";

function VideoSection ({ videoId, setVideoId}) {
    return (
        <div className="content">
            <div className="content__left">
                <VideoStats videoId={videoId}/>
                <VideoDescription videoId={videoId}/>
                <CommentSection videoId={videoId}/>
            </div>
            <div className="content__right">
                <NextVideos videoId={videoId} setVideoId={setVideoId}/>
            </div> 
        </div>
    )
};

export default VideoSection;