import styled from 'styled-components';

export const Image = styled.img`
 max-width: 100%;
 min-height: 100%;
 min-width: 100%;
 object-fit: cover;
 width 100%;
 height 100%;

`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 250px 250px;
  grid-template-areas: "first second third"
                       "first fourth fifth";
  #first {
    grid-area: first;
    border-radius: 40px 0px 0px 40px;
  }
  #second {
    grid-area: second;
  }
  #third {
    grid-area: third;
    border-radius: 0px 40px 0px 0px;
  }
  #fourth {
    grid-area: fourth;
  }
  #fifth {
    grid-area: fifth;
    border-radius: 0px 0px 40px 0px;
  }
`;
