import React from 'react';
import ShareModalContent from './ShareModalContent.jsx'
import {
  Wrapper, LikeShare, CloseShareModal, ShareModalContainer,
  ShareModal, Like, Share, Image, Description, Page, Next, Prev,
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
    this.clickOutside = this.clickOutside.bind(this);
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
    this.setState({ displayModal: 'block' });
  }

  clickOutside(event) {
    const outsideModal = document.getElementById('outsideModal');
    if (event.target === outsideModal) {
      this.clickToClose();
    }
  }

  render() {
    const imgArrayLength = this.props.listing.images.length;
    return (
      <Wrapper>
        <ShareModalContainer id="outsideModal" display={this.state.displayModal} onClick={this.clickOutside}>
          <ShareModal>
            <CloseShareModal onClick={this.clickToClose}>&times; Close</CloseShareModal>
            <ShareModalContent />
          </ShareModal>
        </ShareModalContainer>
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
