import React from 'react';
import {SearchDiv, SearchBox} from './SearchBar.styles';


const SearchBar = () =>{

  return (
    <SearchDiv>
      <SearchBox placeholder='search here' required/>
    </SearchDiv>
  )
}

export default SearchBar;
