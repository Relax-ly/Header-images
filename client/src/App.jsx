import React from 'react';
import $ from 'jquery';
import DefaultGall from './DefaultGall.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    // populates the database
    $.get({
      url: '/header-img/get100',
      success: (succ) => {
        console.log(succ);
      },
      error: (err) => {
        console.log(err);
      }
    });
    // default listing is the first one
    this.getListing(1);
  }

  // get a listing
  getListing(id) {
    $.get({
      url: '/header-img/listing',
      data: { id },
      success: (listing) => {
        console.log(listing);
        this.setState({ listing });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>
        <DefaultGall listing={this.state.listing} />

      </div>
    );
  }
}

export default Header;
