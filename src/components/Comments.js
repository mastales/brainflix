import React from "react";
import userImg from '../components/images/comment_placeholder_img.png';
import Divider from "./Divider";

function Comments() {
    return(
        <>
        <div className="comments">
            <div className="comments__left">
                <img className="comments__userImg" src={userImg} />
            </div>
            <div className="comments__right">
                <div className="comments__middle">
                    <h3 className="comments__name">Connor Walton</h3>
                    <h4 className="comments__date">02/17/2021</h4>
                </div>
                <div className="comments__bottom">
                    <p>This is art.</p>
                </div>
            </div>
        </div>
        <Divider />
        </>

    )

};

export default Comments;