import styled from 'styled-components';

const GifCardDiv = styled.img`
  border-radius:5px;
  max-width: 280px;
  max-height: 300px;
  margin: 0px auto;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: -4px -4px 23px -9px rgba(0,0,0,0.83);
-moz-box-shadow: -4px -4px 23px -9px rgba(0,0,0,0.83);
box-shadow: -4px -4px 23px -9px rgba(0,0,0,0.83);
  }
`;

export {GifCardDiv}
