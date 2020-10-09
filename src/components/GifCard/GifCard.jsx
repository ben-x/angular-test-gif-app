import React from 'react';


import {GifCardDiv} from './GifCard.styles'

const GifCard = ({data, getGif}) => {
// console.log("GifCard -> data", data)
  
  return(
  <GifCardDiv src={`${data?.images?.downsized?.url}`} alt={`${data?.slug}`} onClick={() => getGif(data.slug)}/>
  )
};

export default GifCard;
