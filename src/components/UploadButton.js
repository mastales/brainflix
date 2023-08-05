import React from "react";

function UploadButton() {

const uploadVideo = () => {
    console.log('Video Uploaded')
}   

    return (
        <div className='button__upload'>
            <button onClick={uploadVideo}>Upload</button>
        </div>
    )
}


export default UploadButton