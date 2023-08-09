import React from "react";
import comment from '../components/images/add_comment.svg'; 
import Button from "./UploadButton";

function CommentNew() {
    return (
        <div>
            <h1>Join the Conversation</h1>
                <div className="">
                    <img className="" src=''/>
                </div>
            <div className="">
                <input className="" placeholder="Add New Comment"></input>
                <div className="">
                <Button name='Comment' img={comment}/>
                </div>
            </div>
        </div>
    )
};

export default CommentNew;