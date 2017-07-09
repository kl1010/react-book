import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="kp-search">
          <Link to = '/search' className="w3-btn w3-circle w3-xlarge w3-green">+</Link>
      </div>
    );
  }
}

export default Footer;
