import React from "react";
import likes from '../components/images/likes.svg';
import views from '../components/images/views.svg';
import './Component/Component.scss';
import Divider from "./Divider";

function VideoStats() {
    return (
        <> 
            <Divider />
            <div className="videoStats">
                <div className="videoStats__left">
                    <h3>By First Last</h3>
                    <h4>Date</h4>
                </div>
                <div className="videoStats__right">
                    <p><img src={views} /> Views</p>
                    <p><img src={likes} /> Likes</p>
                </div>
            </div>
            <Divider />
        </>
        
        
    )
}

export default VideoStats;