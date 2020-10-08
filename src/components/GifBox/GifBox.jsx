import React from 'react';
import {GifBoxDiv} from './GifBox.styles'

import GifCard from '../GifCard/GifCard'

const GifBox = () => {
  return (
    <GifBoxDiv>
      <GifCard />
      <GifCard />
      <GifCard />
      <GifCard />
      <GifCard />
      <GifCard />
    </GifBoxDiv>
  )
};

export default GifBox;
