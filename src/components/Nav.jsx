// ResponsiveNavbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';

const ResponsiveNavbar = () => {
  return (
    <Navbar className="custom-navbar shadow p-3 mb-5 bg-white rounded" expand="lg">
      <Container>
        <Navbar.Brand className="custom-navbar-brand" href="#">COC Songs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link className="custom-nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className="custom-nav-link" href="#about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
