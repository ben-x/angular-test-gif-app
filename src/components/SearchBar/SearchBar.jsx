import React from 'react';
import {SearchBarDiv, SearchDiv, SearchBox, SearchButton} from './SearchBar.styles';


const SearchBar = ({handleChange}) =>{

  return (
    <SearchBarDiv>
      <div />
    <SearchDiv>
      <SearchBox placeholder='search here' onChange={handleChange}/>
      <SearchButton>
      <i class="fa fa-search" aria-hidden="true"></i></SearchButton>
    </SearchDiv>
      <div />
    </SearchBarDiv>
  )
}

export default SearchBar;
