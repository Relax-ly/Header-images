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
    console.log(this.props.listing);
    return (
      <Wrapper>
        <Page id="page"> 1/ 25 </Page>
        <Prev id="prev"> ‹ </Prev>
        <Image id="image" src={this.props.listing.images[0].url} />
        <Next id="next"> › </Next>
        <Description id="description">{this.props.listing.images[0].description}</Description>
      </Wrapper>
    );
  }
}

export default Modal;
