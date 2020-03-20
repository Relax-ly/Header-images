import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-template-rows: 100px auto 100px;
  grid-gap: 0;
  grid-template-areas: "1 page 3"
                       "prev image next"
                       "7 desc 9";
  #image {

  }
  #description {

  }
  #page {

  }
  #next {

  }
  #prev {

  }

`;

export const Image = styled.img`  grid-area: image;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.div`  grid-area: desc;
  margin-left: auto;
  margin-right: auto;
`;

export const Page = styled.div`
  grid-area: page;
  height: 50px;
  width: 50px;
`;

export const Next = styled.button`
  grid-area: next;
  font-family:sans-serif;
  font-size: 200%;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  height: 50px;
  width: 50px;
`;

export const Prev = styled.button`
  grid-area: prev;
  font-family:sans-serif;
  font-size: 200%;
  text-align: center;
  vertical-align: middle;
  border-radius: 100%;
  height: 50px;
  width: 50px;
`;
