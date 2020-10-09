import React from 'react';

import {GifBoxDiv} from './GifBox.styles'

import GifCard from '../GifCard/GifCard'

const GifBox = ({data, getGif}) => {
  // const getGifDetails = () => {
  //   getGif(data.slug);
  // }
  console.log("GifBox -> data", data)
  return (
    <GifBoxDiv>
      {
        data?.map(result=>(
          <GifCard key={data.indexOf(result) } data={result} getGif={getGif}  />
        ))
      }
    </GifBoxDiv>
  )
};

export default GifBox;
