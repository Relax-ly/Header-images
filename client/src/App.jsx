import React from 'react';
import Testing from './testing.jsx';
class Header extends React.Component {
  constructor(props) {
    super (props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div> React Working!</div>
        <Testing />
      </div>
    )
  }
}

export default Header;