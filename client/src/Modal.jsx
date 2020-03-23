import React from 'react';
import ShareModalContent from './ShareModalContent.jsx'
import {
  Wrapper, LikeShare, CloseShareModal, ShareModalContainer,
  ShareModal, Like, Share, Image, Description, Page, Next, Prev,
} from './style/Style-Modal-Contents';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.index);
    this.state = {
      current: this.props.index,
      displayModal: 'none'
    };
    this.toPrev = this.toPrev.bind(this);
    this.toNext = this.toNext.bind(this);
    this.clickToClose = this.clickToClose.bind(this);
    this.clickToShow = this.clickToShow.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  // previous button will decrement the current imge shown.
  toPrev() {
    let previous = this.state.current;
    previous--;
    this.setState({ current: previous });
  }

  // previous button will increment the current imge shown.
  toNext() {
    let next = this.state.current;
    next++;
    this.setState({ current: next });
  }

  // close share modal.
  clickToClose() {
    this.setState({ displayModal: 'none' });
  }

  // show modal.
  clickToShow() {
    this.setState({ displayModal: 'block' });
  }

  // on click outside of sharemodal, it will hide the modal.
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
            <CloseShareModal onClick={this.clickToClose}>&times;</CloseShareModal>
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
