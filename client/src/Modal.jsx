import React from 'react';
import {
  Wrapper, Image, Description, Page, Next, Prev
} from './style/Style-Modal-Contents';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Page id="page"> 1/ 25 </Page>
        <Prev id="prev"> ‹ </Prev>
        <Image id="image" src="https://clips-media-assets2.twitch.tv/24603802752-offset-10087.718000000003-18-preview-480x272.jpg" />
        <Next id="next"> › </Next>
        <Description id="description">Description</Description>
      </Wrapper>
    );
  }
}

export default Modal;
