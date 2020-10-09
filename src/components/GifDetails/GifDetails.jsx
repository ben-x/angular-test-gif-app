import React from 'react';

import {GifPageDetails, GifPageimage, GifPageDiv} from './GifDetails.styles'

const GifDetails = ({data, clearGif}) => {
  return(
  <>
 <h2 onClick={clearGif} style={{ cursor:'pointer' }}> <i class="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; Back</h2> 
<GifPageDiv>
  <GifPageimage src={data.images.original.url} />
  <GifPageDetails>
   <p> Title: <span> {data.title}</span></p>
   <p> Rating: <span>{data.rating}</span></p>
  </GifPageDetails>
</GifPageDiv>
  </>
)};

export default GifDetails;
