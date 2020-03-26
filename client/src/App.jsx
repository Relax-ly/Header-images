import React from 'react';
import axios from 'axios';
import DefaultGall from './DefaultGall.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {
        _id: 'number',
        images: [1, 2, 3, 4, 5].map((i) => {
          return {
            _id: i,
            url: 'http://localhost:2555/headerimg/loadingIMG.gif',
            description: 'description'
          };
        })
      },
    };
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    // getting index from url
    const splitUrl = window.location.href.split('/');
    const index = splitUrl[3];
    this.getListing(index);
  }

  // get a listing
  getListing(id) {
    axios.get('http://localhost:2555/headerimg/listing', {
      params: {
        _id: id
      }
    })
      .then((result) => {
        this.setState({ listing: result.data[0] });
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
