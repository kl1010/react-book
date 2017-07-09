import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="w3-container w3-center w3-green">
      <div className="w3-padding-16" >
        <Link to = "/" className="kp-bleeding w3-wide w3-xxlarge ">myReads </Link>
      </div>
      </div>
    );
  }
}

export default Header;
