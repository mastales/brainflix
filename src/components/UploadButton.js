import React from "react";
import './Component/Component.scss';

function Button(props) {

const uploadVideo = () => {
    console.log('Video Uploaded')
}   

    return (
        <>
            <button className='Button__upload' onClick={uploadVideo}>
                <div className="Button__img">
                    <img src={props.img} alt="Upload Icon" /> 
                </div>
                <div className="Button__text">{props.name}
                </div>
            </button>
        </>
    )
};
export default Button;