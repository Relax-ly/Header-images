import React from 'react';
import axios from 'axios';
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
    axios.get('/header-img/get100').then((res) => {
      console.log(res.data);
    })
      .catch((err) => {
        console.log(err);
      });

    // default listing is the first one
    this.getListing(1);
  }

  // get a listing
  getListing(id) {
    axios.get('/header-img/listing', { params: {
      _id: id
    } })
      .then((listing) => {
        console.log(listing.data);
        this.setState({ listing });
      })
      .catch((err) => {
        console.log(err);
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
