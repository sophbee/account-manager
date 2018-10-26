import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import image from '../../images/paymerang.png';

class Header extends Component {
render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand style={{ backgroundColor: "#f4f7f8" }}>
            <img src={image} alt="Paymerang" style={{ height: 100, weight: 100 }} />
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
export default Header;