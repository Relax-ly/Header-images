import React from 'react';
import styled from 'styled-components';
import { Image, Wrapper } from './style/style-DefaultGall';

class DefaultGall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props.listing);
    return (
      <Wrapper>
        {/* <img src={this.props.listing.images[0].url} alt="first img" />
        <img src={this.props.listing.images[1].url} alt="second img" />
        <img src={this.props.listing.images[2].url} alt="third img" />
        <img src={this.props.listing.images[3].url} alt="fourt img" />
        <img src={this.props.listing.images[4].url} alt="fifth img" /> */}
        <Image src={this.props.listing.images[0].url} alt="first img" />
      </Wrapper>
    );
  }
}
export default DefaultGall;
