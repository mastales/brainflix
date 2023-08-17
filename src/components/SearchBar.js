import React from "react";
import './Component/Component.scss';
import search from '../components/images/search.svg';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import icon from '../components/images/Mohan-muruge.jpg';


function SearchBar() {
    return (
        <div className='searchBar'>
            <div className='searchBar__left'>
                <img classname='searchBar__img' src={search} />
            </div>
            <div className="searchBar__right">
                <input className='searchBar__input' type='text' placeholder='Search' />
                <img className="searchBar__profileImg" src={icon}/>
            </div>
        </div>
    )
}



export default SearchBar

