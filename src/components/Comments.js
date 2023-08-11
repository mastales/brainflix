import React from "react";
import userImg from '../components/images/comment_placeholder_img.png';
import Divider from "./Divider";
import data from '../data/video-details.json';

function Comments() {

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };
    const video = data[0];
    const comments = video.comments;
    return (
        <div>
            {comments.map((item) => (
                <React.Fragment key={item.comment.id}>
                    <div className="comments">
                        <div className="comments__left">
                            <img className="comments__userImg" src={userImg} />
                        </div>
                        <div className="comments__right">
                            <div className="comments__middle">
                                <h3 className="comments__name">{item.name}</h3>
                                <h4 className="comments__date">{formatDate(item.timestamp)}</h4>
                            </div>
                            <div className="comments__bottom">
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    </div>
                    <Divider />
                </React.Fragment>
            ))}  
        </div>
    );
}

export default Comments;
