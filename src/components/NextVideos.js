import React, { useState } from "react";
import data from '../data/videos.json';

function NextVideos({ videoId, setVideoId }){

    const videoData = data.filter((currentItem) => {
        return currentItem.id !== videoId ? true : false
    })

    const updateQueue = (e) => {
        const clickedId = e.currentTarget.dataset.id;
        setVideoId(clickedId)
    }
//Need to pass clickedId over to Hero video section
//Need to leverage the state prop I have passed to this component
    return (
        <>
            <div className="nextVideo">
            <h1 className='nextUp__title'>Next Video</h1>
                {videoData.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="nextUp">
                            <div className="nextUp__left">
                                <img data-id={item.id} onClick={updateQueue} className="nextUp__img" src={item.image}/>
                            </div>
                            <div data-id={item.id} onClick={updateQueue} className="nextUp__right">
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

