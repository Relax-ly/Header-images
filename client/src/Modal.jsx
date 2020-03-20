import React from 'react';
import { Wrapper, CloseButton } from './style/Style-Modal';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ display: false });
  }

  render() {
    return (
      <Wrapper>
        <CloseButton onClick={this.closeModal} display={this.state.display}>&times;</CloseButton>
      </Wrapper>
    );
  }
}

export default Modal;
