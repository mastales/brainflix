import React from "react";
import CommentNew from "./CommentNew";
import Comments from "./Comments";

function CommentSection ({ videoId }) {
    return (
        <>
            <CommentNew videoId={videoId}/>
            <Comments videoId={videoId}/>
        </>
    )
};

export default CommentSection;