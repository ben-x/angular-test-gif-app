import React,{useState, useEffect} from 'react';
import axios from 'axios'

import SearchBar from '../../components/SearchBar/SearchBar';
import GifBox from '../../components/GifBox/GifBox';
import GifDetails from '../../components/GifDetails/GifDetails';

import loaderIcon from "../../assets/loader.gif";

const HomePage = () =>{

  const [values, setValues] = useState({
    searchResult: [],
    searchField,
    loading: false,
    page: 1,
    modalIsOpen: false,
    gif: {}
  });
  const {
    searchResult,
    searchField,
    loading,
    page,
    modalIsOpen,
    gif,
  } = values;
  // const [searchField, setSearchField] = useState('')
  
    async function fetchData() {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${searchField}&limit=25&offset=${page-1}&rating=Y&lang=en`, {
        headers: {
          'Content-Type': 'text/plain' 
        }
      });
      setValues({...values, searchResult:response.data, loading:false})
    } catch (error) {
      console.error(error);
    }
  }
  console.log("HomePage -> values", values)

  
  const onSubmit = e => {
    setValues({...values, loading:true})
    e.preventDefault();
    fetchData();
  };


  
  const handleChange = e => {
    setValues({...values, searchField:e.target.value.toLowerCase()})
    };

    const getGifDetails = (slug) =>{
      console.log("getGifDetails -> slug", slug)
      console.log("getGifDetails -> searchResult.data", searchResult.data)
      const getGif = searchResult.data.find(gif => gif.slug === slug);
      setValues({...values, gif:getGif})
    }

    const clearGif = () => setValues({...values, gif:{}})

  return (
  <>
    <SearchBar  handleChange={handleChange} onSubmit={onSubmit}/>
    {loading ? <img src={loaderIcon} alt='loading items' style={{ margin:'20% 45%' }} /> :
    gif?.slug ?
    <GifDetails data={gif} clearGif={clearGif}/> :
    <GifBox data={searchResult.data} getGif={getGifDetails}/>
}
  </>
)};

export default HomePage;
