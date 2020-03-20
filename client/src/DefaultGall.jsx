import React from 'react';
import { Image, Wrapper } from './style/style-DefaultGall';

class DefaultGall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Wrapper>
        <Image src={this.props.listing.images[0].url} alt="img 1" id="first" />
        <Image src={this.props.listing.images[1].url} alt="img 2" id="second" />
        <Image src={this.props.listing.images[2].url} alt="img 3" id="third" />
        <Image src={this.props.listing.images[3].url} alt="img 4" id="fourth" />
        <Image src={this.props.listing.images[4].url} alt="img 5" id="fifth" />
      </Wrapper>
    );
  }
}
export default DefaultGall;
