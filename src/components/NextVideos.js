import React, { useState } from "react";
import data from '../data/videos.json';

function NextVideos(){
    const [videoId, setVideoId] = useState(
        "84e96018-4022-434e-80bf-000ce4cd12b8"
    )
    
    const videoData = data.filter((currentItem) => {
        return currentItem.id !== videoId ? true : false
    })

    const updateQueue = (e) => {
        const clickedId = e.currentTarget.dataset.id;
        setVideoId(clickedId)
    }

    return (
        <>
        <div>
        <h1 className='nextUp__title'>Next Video</h1>
            {videoData.map((item) => (
                <React.Fragment key={item.id}>
                    <div className="nextUp">
                        <div className="nextUp__left">
                            <img onClick={updateQueue} className="nextUp__img" src={item.image}/>
                        </div>
                        <div onClick={updateQueue} className="nextUp__right">
                            <h4 className="nextUp__name" >{item.title}</h4>
                            <p className="nextUp__author">{item.channel}</p>
                        </div>
                    </div> 
                </React.Fragment>
            ))}
            
        </div>
        </>
    )
};

export default NextVideos;

