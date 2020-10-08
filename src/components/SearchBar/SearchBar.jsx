import React from 'react';
import {SearchDiv, SearchBox} from './SearchBar.styles';


const SearchBar = ({handleChange}) =>{

  return (
    <SearchDiv>
      <SearchBox placeholder='search here' onChange={handleChange}/>
    </SearchDiv>
  )
}

export default SearchBar;
