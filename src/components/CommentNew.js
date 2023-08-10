import React from "react";
import comment from '../components/images/add_comment.svg'; 
import icon from '../components/images/Mohan-muruge.jpg';
import Button from "./UploadButton";

function CommentNew() {
    return (
        <div className="commentNew">
            <div className="commentNew__left">
                <img className="commentNew__img" src={icon}/>
                </div>
            <div className="commentNew__right">
                <h1 className="commentNew__title">Join the Conversation</h1>
                <input className="commentNew__input" placeholder="Add New Comment"></input>
                <div className="commentNew__button">
                    <Button name='Comment' img={comment}/>
                </div>
            </div>
        </div>
    )
};

export default CommentNew;