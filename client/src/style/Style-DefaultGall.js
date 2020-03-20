import styled from 'styled-components';

export const Image = styled.img`
 max-width: 100%;
 min-height: 100%;
 min-width: 100%;
 object-fit: cover;
 width 100%;
 height 100%;
 :hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 0.3s ease;
 }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 250px 250px;
  grid-gap: 7px;
  grid-template-areas: "first second third"
                       "first fourth fifth";
  #first {
    grid-area: first;
    border-radius: 20px 0px 0px 20px;
  }
  #second {
    grid-area: second;
  }
  #third {
    grid-area: third;
    border-radius: 0px 20px 0px 0px;
  }
  #fourth {
    grid-area: fourth;
  }
  #fifth {
    grid-area: fifth;
    border-radius: 0px 0px 20px 0px;
  }
`;
