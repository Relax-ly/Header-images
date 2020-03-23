import React from 'react';
import Modal from './Modal.jsx';
import { WrapperModal, CloseButton } from './style/Style-Modal';
import { Image, Wrapper } from './style/style-DefaultGall';

class DefaultGall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: 'none',
      startImg: 0
    };
    this.handleclick = this.handleclick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleclick(event) {
    // convert class to a index value so we can determine
    // what image will be display in modal.
    const number = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
      fifth: 4
    };

    let index = number[event.target.id];
    this.setState({ startImg: index });
    this.setState({ displayModal: 'inline' });
  }

  // this function closes the modal
  closeModal() {
    this.setState({ displayModal: 'none' });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Image src={this.props.listing.images[0].url} alt="img 1" id="first" onClick={this.handleclick} />
          <Image src={this.props.listing.images[1].url} alt="img 2" id="second" onClick={this.handleclick} />
          <Image src={this.props.listing.images[2].url} alt="img 3" id="third" onClick={this.handleclick} />
          <Image src={this.props.listing.images[3].url} alt="img 4" id="fourth" onClick={this.handleclick} />
          <Image src={this.props.listing.images[4].url} alt="img 5" id="fifth" onClick={this.handleclick} />
        </Wrapper>
        <WrapperModal>
          <CloseButton onClick={this.closeModal} display={this.state.displayModal}>
            &times; Close
          </CloseButton>
          <Modal listing={this.props.listing} index={this.state.startImg} />
        </WrapperModal>
      </div>
    );
  }
}
export default DefaultGall;
