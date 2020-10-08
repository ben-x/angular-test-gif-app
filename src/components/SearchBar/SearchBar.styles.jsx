import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: none;
  margin: 5% 0px;
`;

const SearchBox = styled.input`
  border-radius:15px;
  padding: 15px;
  border: solid 2px #c2c2c2;
  flex-basis:45%;
  color: black;
`;

export {SearchDiv, SearchBox}
