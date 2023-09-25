import React from "react";
import CommentSection from "./CommentSection";
import VideoDescription from "./VideoDescripton";
import VideoStats from "./VideoStats";
import NextVideos from "./NextVideos";

function VideoSection ({ videoId, setVideoId, api }) {
    return (
        <div className="content">
            <div className="content__left">
                <VideoStats api={api} videoId={videoId}/>
                <VideoDescription api={api} videoId={videoId}/>
                <CommentSection api={api} videoId={videoId}/>
            </div>
            <div className="content__right">
                <NextVideos api={api} videoId={videoId} setVideoId={setVideoId}/>
            </div> 
        </div>
    )
};

export default VideoSection;