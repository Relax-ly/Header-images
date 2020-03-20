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
  padding: 30px 30px;
`;

export const CloseButton = styled.button`
  grid-area: close;
  border-radius: 5px;
  float: left;
  font-size: 30px;
  color: #000;
  background-color: #D3D3D3;
  :hover {
    background-color: #C0C0C0;
    text-decoration: none;
    cursor: pointer;
  }
`;
