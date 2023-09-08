import React, { useEffect, useState } from "react";
import axios from "axios";
import Divider from "./Divider";
import userImg from "./images/comment_placeholder_img.png";

function Comments({ api, apiKey, videoId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`${api}/videos/${videoId}?api_key=${apiKey}`)
            .then(response => {
                setComments(response.data.comments);
            })
            .catch(err => console.log(err));
    }, [api, apiKey, videoId]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <div className="comments__all">
            {comments.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="comments">
                        <div className="comments__left">
                            <img className="comments__userImg" src={userImg} alt="User"/>
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
