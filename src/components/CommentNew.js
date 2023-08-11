import React, { useState } from "react";
import comment from '../components/images/add_comment.svg'; 
import icon from '../components/images/Mohan-muruge.jpg';
import Button from "./UploadButton";
import Divider from "./Divider";
import data from '../data/video-details.json';

function CommentNew() {
    const [videoId, setVideoId] = useState(
        "84e96018-4022-434e-80bf-000ce4cd12b8"
    )
    
    const videoData = data.filter((currentItem) => {
        return currentItem.id === videoId ? true : false
    })

    return (
        <>
            <div className="commentNew__count">
                <h4>{videoData[0].comments.length} Comments</h4>
            </div>
            <div className="commentNew">
            <div className="commentNew__left">
                <img className="commentNew__img" src={icon}/>
                </div>
            <div className="commentNew__right">
                <h1 className="commentNew__title">Join the Conversation</h1>
                <textarea className="commentNew__input" placeholder="Add New Comment"></textarea>
                <div className="commentNew__button">
                    <Button name='Comment' img={comment}/>
                </div>
            </div>
        </div>
        <Divider />
        </>
        
    )
};

export default CommentNew;