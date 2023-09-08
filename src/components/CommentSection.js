import React from "react";
import CommentNew from "./CommentNew";
import Comments from "./Comments";

function CommentSection ({ videoId, api, apiKey }) {
    return (
        <>
            <CommentNew api={api} apiKey={apiKey} videoId={videoId}/>
            <Comments api={api} apiKey={apiKey} videoId={videoId}/>
        </>
    )
};

export default CommentSection;