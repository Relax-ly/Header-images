import React from 'react';
import axios from 'axios';
import DefaultGall from './DefaultGall.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {
        _id: 'number',
        images: [
          {
            _id: 1,
            url: 'loadingIMG.gif',
            description: 'description'
          },
          {
            _id: 2,
            url: 'loadingIMG.gif',
            description: 'description'
          },
          {
            _id: 3,
            url: 'loadingIMG.gif',
            description: 'description'
          },
          {
            _id: 4,
            url: 'loadingIMG.gif',
            description: 'description'
          },
          {
            _id: 5,
            url: 'loadingIMG.gif',
            description: 'description'
          }
        ]
      },
    };
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    // default listing
    this.getListing(67);
  }

  // get a listing
  getListing(id) {
    axios.get('/header-img/listing', {
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
