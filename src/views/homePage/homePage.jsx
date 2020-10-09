import React,{useState, useEffect} from 'react';
import axios from 'axios'

import SearchBar from '../../components/SearchBar/SearchBar';
import GifBox from '../../components/GifBox/GifBox'

const HomePage = () =>{

  const [values, setValues] = useState({
    searchResult: [],
    loaded: false,
    page: 1,
    modalIsOpen: false,
    gif: ""
  });
  const {
    searchResult,
    loaded,
    page,
    modalIsOpen,
    gif,
  } = values;
  const [searchField, setSearchField] = useState('')
  
  console.log("HomePage -> searchField", searchField)
  useEffect(() => {
    async function fetchData() {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${searchField}&limit=25&offset=${page-1}&rating=Y&lang=en`, {
        headers: {
          'Content-Type': 'text/plain' 
        }
      });
      setValues({...values, searchResult:response.data, loaded:true})
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  },[searchField])
  console.log("HomePage -> searchResult", searchResult)

  
  const handleChange = e => {
  // console.log("HomePage -> e", e.target.value)
  setSearchField(
      e.target.value.toLowerCase()
    );
  };

  return (
  <>
    <SearchBar  handleChange={handleChange}/>
    <GifBox data={searchResult.data}/>
  </>
)};

export default HomePage;
