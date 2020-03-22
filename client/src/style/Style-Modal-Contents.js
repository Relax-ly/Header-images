import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-template-rows: 100px auto 100px;
  grid-gap: 0;
  grid-template-areas: "1 page ls"
                       "prev image next"
                       "7 desc 9";
  align-items: center;
  justify-items: center;
  padding: 0px 60px 0px 0px;
`;

export const LikeShare = styled.div`
  grid-area: ls;
  display:grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "share like";
  top: 0;
  right: 10px;
  position: absolute;
  margin-top: 25px;
`;

export const ShareModalContainer = styled.div`
  display: ${(display) => display.display};
  position: fixed;
  margin-left: center;
  margin-right: center;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #282828;
  opacity: 0.7;
`;

export const CloseShareModal = styled.button`

`;

export const Like = styled.button`
  grid-area: like;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  margin: 5px;
  border: none;
  font-size: 20px;
  font-family: Helvetica;
  :hover {
    background-color: #DCDCDC;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    outline:none;
  }
`;

export const Share = styled.button`
  grid-area: share;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  margin: 5px;
  border: none;
  font-size: 20px;
  font-family: Helvetica;
  :hover {
    background-color: #DCDCDC;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    outline:none;
  }
`;

export const Image = styled.img`
  grid-area: image;
  min-height: 500px;
  max-height: 500px;
`;

export const Description = styled.div`
  grid-area: desc;
  text-align: center;
  font-family: math;
`;

export const Page = styled.div`
  grid-area: page;
  text-align: center;
  margin-top: 25px;
  font-family: math;
  height: 50px;
  width: 50px;
`;

export const Next = styled.button`
  display: ${(state) => { if (state.state + 1 >= state.max) { return 'none'; } }};
  grid-area: next;
  font-family: fangsong;
  font-size: 200%;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  :hover {
    background-color: #DCDCDC;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    outline:none;
  }
`;

export const Prev = styled.button`
  display: ${(state) => { if (state.state === 0) { return 'none'; } }};
  grid-area: prev;
  font-family: fangsong;
  font-size: 200%;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin-left: 90px;
  :hover {
    background-color: #DCDCDC;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    outline:none;
  }
`;
