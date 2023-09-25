import React, { useEffect, useState } from "react";
import axios from "axios";
import icon from "./images/Mohan-muruge.jpg";
import Button from "./UploadButton";
import comment from "./images/upload.svg";

function CommentNew({ api, videoId }) {
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
        axios.get(`${api}/videos/${videoId}/`)
            .then(response => {
                setCommentsCount(response.data.comments.length);
            })
            .catch(err => console.log(err));
    }, [api, videoId]);

    return (
        <div className="commentNew__box">
            <div className="commentNew__count">
                <h4>{commentsCount} Comments</h4>
            </div>
            <div className="commentNew">
                <div className="commentNew__left">
                    <img className="commentNew__img" src={icon} alt="User"/>
                </div>
                <div className="commentNew__right">
                    <h1 className="commentNew__title">Join the Conversation</h1>
                    <textarea className="commentNew__input" placeholder="Add New Comment"></textarea>
                </div>
            </div>
            <div className="commentNew__buttonHold">
                <div className="commentNew__button">
                    <Button name='Comment' img={comment}/>
                </div>
            </div>
            <hr className="divider__comment"/>
        </div>
    )
};

export default CommentNew;
