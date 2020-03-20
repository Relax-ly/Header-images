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
    previous --;
    this.setState({ current: previous });
  }

  toNext() {
    let next = this.state.current;
    next ++;
    this.setState({ current: next });
  }

  render() {
    return (
      <Wrapper>
        <Page id="page"> {this.state.current + 1}/{this.props.listing.images.length - 1} </Page>
        <Prev id="prev" onClick={this.toPrev} state={this.state.current}> ‹ </Prev>
        <Image id="image" src={this.props.listing.images[this.state.current].url} />
        <Next id="next" onClick={this.toNext}> › </Next>
        <Description id="description">{this.props.listing.images[this.state.current].description}</Description>
      </Wrapper>
    );
  }
}

export default Modal;
