import React from "react";
import CommentCount from "./CommentCount";
import CommentNew from "./CommentNew";
import Comments from "./Comments";

function CommentSection () {
    return (
        <>
            <CommentCount />
            <CommentNew />
            <Comments />
        </>
    )
};

export default CommentSection;