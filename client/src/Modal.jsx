import React from 'react';
import {
  Wrapper, LikeShare, CloseShareModal, ShareModal, Like, Share, Image, Description, Page, Next, Prev,
} from './style/Style-Modal-Contents';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      displayModal: 'none'
    };
    this.toPrev = this.toPrev.bind(this);
    this.toNext = this.toNext.bind(this);
    this.clickToClose = this.clickToClose.bind(this);
    this.clickToShow = this.clickToShow.bind(this);
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

  clickToClose() {
    this.setState({ displayModal: 'none' });
  }

  clickToShow() {
    this.setState({ displayModal: 'inline' });
  }

  render() {
    const imgArrayLength = this.props.listing.images.length;
    return (
      <Wrapper>
        <ShareModal onClick={this.clickToClose} display={this.state.displayModal}>
          <CloseShareModal>&times; Close</CloseShareModal>
        </ShareModal>
        <LikeShare>
          <Share onClick={this.clickToShow}>&#xf045;</Share>
          <Like>❤</Like>
        </LikeShare>
        <Page id="page">
          {this.state.current + 1}
          /
          {this.props.listing.images.length}
        </Page>
        <Prev onClick={this.toPrev} state={this.state.current}> ‹ </Prev>
        <Image src={this.props.listing.images[this.state.current].url} />
        <Next onClick={this.toNext} state={this.state.current} max={imgArrayLength}> › </Next>
        <Description>{this.props.listing.images[this.state.current].description}</Description>
      </Wrapper>
    );
  }
}

export default Modal;
