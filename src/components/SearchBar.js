import React from "react";
import './Component/Component.scss';
import search from '../components/images/search.svg';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"


function SearchBar() {
    return (
        <InputGroup className='searchBar'>
            <InputLeftElement 
            top='13px'
            marginLeft='5px'
            className='searchBar__left' 
            pointerEvents='none'>
                <img classname='searchBar__img' src={search} />
            </InputLeftElement>
            <Input className='searchBar__input' type='text' placeholder='Search' />
        </InputGroup>
    )
}


export default SearchBar