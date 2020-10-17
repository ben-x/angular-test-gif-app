import React,{useState, useEffect} from 'react';
import axios from 'axios'

import SearchBar from '../../components/SearchBar/SearchBar';
import GifBox from '../../components/GifBox/GifBox';
import GifDetails from '../../components/GifDetails/GifDetails';
import PaginationBar from '../../components/Pagination/PaginationBar'

import loaderIcon from "../../assets/loader.gif";

const HomePage = () =>{

  const [values, setValues] = useState({
    searchResult: [],
    searchField,
    loading: false,
    page: 1,
    limit:25,
    gif: {}
  });
  const {
    searchResult,
    searchField,
    loading,
    limit,
    page,
    gif,
  } = values;
  
    async function fetchData() {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${searchField}&limit=25&offset=${limit *(page-1)}&rating=Y&lang=en`, {
        headers: {
          'Content-Type': 'text/plain' 
        }
      });
      setValues({...values, searchResult:response.data, loading:false, gif:{}})
    } catch (error) {
      console.error(error);
    }
  }

  
  const onSubmit = e => {
    setValues({...values, loading:true})
    e.preventDefault();
    fetchData();
  };
  useEffect(() => {
    setValues({...values, loading:true})
    fetchData();
}, [page])


  
  const handleChange = e => {
    setValues({...values, searchField:e.target.value.toLowerCase()})
    };

    const getGifDetails = (slug) =>{
      const getGif = searchResult.data.find(gif => gif.slug === slug);
      setValues({...values, gif:getGif})
    }

    const clearGif = () => setValues({...values, gif:{}})
    const setPage = (page) => setValues({...values, page})

  return (
  <>
    <SearchBar  handleChange={handleChange} onSubmit={onSubmit} data-test='searchbar'/>
    {loading ? <img src={loaderIcon} alt='loading items' style={{ margin:'20% 45%' }} /> :
    gif?.slug ?
    <GifDetails data={gif} clearGif={clearGif} data-test='gifdetails'/> :
    <>
    <GifBox data={searchResult.data} getGif={getGifDetails} data-test='gifbox'/>
    {searchResult.data ?
    <PaginationBar limit={limit} page={page} pagination={searchResult.pagination} setPage={setPage}/>
    : null}
    </>
}
  </>
)};

export default HomePage;
