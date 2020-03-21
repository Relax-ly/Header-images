import React from 'react';
import Modal from './Modal.jsx';
import { WrapperModal, CloseButton } from './style/Style-Modal';
import { Image, Wrapper } from './style/style-DefaultGall';

class DefaultGall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    };
    this.handleclick = this.handleclick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleclick(event) {
    console.log(`clicked ${event.target.id} image`);
    this.setState({ displayModal: true });
  }

  closeModal() {
    this.setState({ displayModal: false });
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
          <Modal listing={this.props.listing} />
        </WrapperModal>
      </div>
    );
  }
}
export default DefaultGall;
