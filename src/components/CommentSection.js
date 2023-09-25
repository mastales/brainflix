import React from "react";
import CommentNew from "./CommentNew";
import Comments from "./Comments";

function CommentSection ({ videoId, api }) {
    return (
        <>
            <CommentNew api={api} videoId={videoId}/>
            <Comments api={api} videoId={videoId}/>
        </>
    )
};

export default CommentSection;