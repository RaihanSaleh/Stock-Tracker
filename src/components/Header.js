import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header(props) {
  return (
    <Navbar bg='primary' variant="dark">
      <Navbar.Brand href="/">Stock Performance Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="" href="/">Home</Nav.Link>
        <Nav.Link className="" href="/about">About</Nav.Link>
      </Nav>

    </Navbar>
  );
}

export default Header;