import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => props.children.props.display ? "inline" : "none"};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const CloseButton = styled.button`
  float: right;
  font-size: 30px;
  color: #ccc;
  :hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
