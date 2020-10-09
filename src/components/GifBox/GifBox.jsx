import React from 'react';
import {withRouter} from 'react-router-dom';

import {GifBoxDiv} from './GifBox.styles'

import GifCard from '../GifCard/GifCard'

const GifBox = ({data}) => {
  return (
    <GifBoxDiv>
      {
        data?.map(result=>(
          <GifCard key={data.indexOf(result) } data={result} />
        ))
      }
    </GifBoxDiv>
  )
};

export default GifBox;
