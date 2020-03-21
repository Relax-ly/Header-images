import React from 'react';
import {
  Wrapper, Image, Description, Page, Next, Prev
} from './style/Style-Modal-Contents';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this.toPrev = this.toPrev.bind(this);
    this.toNext = this.toNext.bind(this);
  }

  toPrev() {
    let previous = this.state.current;
    previous--;
    this.setState({ current: previous });
  }

  toNext() {
    let next = this.state.current;
    next++;
    this.setState({ current: next });
  }

  render() {
    const imgArrayLength = this.props.listing.images.length;
    return (
      <Wrapper>
        <Page id="page">
          {this.state.current + 1}
          /
          {this.props.listing.images.length}
        </Page>
        <Prev id="prev" onClick={this.toPrev} state={this.state.current}> ‹ </Prev>
        <Image id="image" src={this.props.listing.images[this.state.current].url} />
        <Next id="next" onClick={this.toNext} state={this.state.current} max={imgArrayLength}> › </Next>
        <Description id="description">{this.props.listing.images[this.state.current].description}</Description>
      </Wrapper>
    );
  }
}

export default Modal;
