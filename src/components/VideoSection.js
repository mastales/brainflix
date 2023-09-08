import React from "react";
import CommentSection from "./CommentSection";
import VideoDescription from "./VideoDescripton";
import VideoStats from "./VideoStats";
import NextVideos from "./NextVideos";

function VideoSection ({ videoId, setVideoId, api, apiKey, videoIdentity, videoListContent}) {
    return (
        <div className="content">
            <div className="content__left">
                <VideoStats api={api} apiKey={apiKey} videoId={videoId}/>
                <VideoDescription api={api} apiKey={apiKey} videoId={videoId}/>
                <CommentSection api={api} apiKey={apiKey} videoId={videoId}/>
            </div>
            <div className="content__right">
                <NextVideos api={api} apiKey={apiKey} videoId={videoId} setVideoId={setVideoId}/>
            </div> 
        </div>
    )
};

export default VideoSection;