import React, { useEffect, useState } from "react";
import axios from "axios";

function NextVideos({ api, apiKey, videoId, setVideoId }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(`${api}/videos?api_key=${apiKey}`)
            .then(response => {
                setVideos(response.data);
            })
            .catch(err => console.log(err));
    }, [api, apiKey]);

    const filteredVideos = videos.filter(item => item.id !== videoId);

    const updateQueue = (e) => {
        const clickedId = e.currentTarget.dataset.id;
        setVideoId(clickedId);
    };

    return (
        <div className="nextVideo__divider">
            <div className="nextVideo">
                <h1 className='nextUp__title'>Next Video</h1>
                {filteredVideos.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="nextUp">
                            <div className="nextUp__left">
                                <img data-id={item.id} onClick={updateQueue} className="nextUp__img" src={item.image} alt={`Thumbnail for ${item.title}`} />
                            </div>
                            <div data-id={item.id} onClick={updateQueue} className="nextUp__right">
                                <h4 className="nextUp__name">{item.title}</h4>
                                <p className="nextUp__author">{item.channel}</p>
                            </div>
                        </div> 
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default NextVideos;
