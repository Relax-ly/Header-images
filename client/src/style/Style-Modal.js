import styled from 'styled-components';

export const WrapperModal = styled.div`
  display: ${(props) => props.children[0].props.display ? "inline" : "none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 1;
  grid-area: close;
  border-radius: 5px;
  float: left;
  font-family: sans-serif;
  font-size: 15px;
  padding: 7px 13px 7px 13px;
  color: #000;
  background-color: #DCDCDC;
  margin: 30px;
  :hover {
    background-color: #C0C0C0;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    outline:none;
  }
`;
