import {React, useState, useEffect} from "react";
import './Component/Component.scss';
import '../../src/styles/partials/_button.scss'
import HeaderNav from "./HeaderNav";
import Divider from "./Divider";
import publish from '../components/images/publish.svg';
import Button from "./UploadButton";
import '../../src/styles/partials/_uploadPage.scss';

function UploadPage () {

    return (
        <div className="uploadPage">
             <Divider/>
             <div className="uploadPage__title">
                <h1>Upload Video</h1>
                <Divider/>
             </div>
             
             <div className="uploadPage__subtitle"> 
                <h3>Video Thumbnail</h3>
                {/* <img className="" src={null}/> */}
             </div>

             <form className={"uploadPage__form"}>
                <label>
                    <h3 className="uploadPage__subtitle">Title Your Video</h3>
                    <input
                        className={"uploadPage__form__input"}
                        type={"text"}
                        name={"Title Your Video"}
                        placeholder={"Add a Title to your Video..."}
                    />
                </label>
                <label>
                <h3 className="uploadPage__subtitle">Add a Video Description</h3>
                    <input
                        className={"uploadPage__form__input"}
                        type={"text"}
                        name={"Add A Video Description"}
                        placeholder={"Add a Description to your Video..."}
                    />
                </label>
        </form>
        <Button 
            name='Publish' 
            img={publish}
            className={"uploadPage__button"} />
        <h2 className="uploadPage__cancel">Cancel</h2>  
        </div>
    )
}

export default UploadPage