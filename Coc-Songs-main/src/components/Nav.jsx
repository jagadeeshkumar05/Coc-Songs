// ResponsiveNavbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';

const ResponsiveNavbar = () => {
  return (
    <Navbar className="custom-navbar shadow p-3 mb-3 bg-white rounded" expand="lg">
      <Container>

        <Navbar.Brand className="custom-navbar-brand" href="/">
          <img src='/channels4_profile.jpg' alt="Logo" className='logo' />
          COC Songs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link className="custom-nav-link" href="/">Home</Nav.Link>
            <Nav.Link className="custom-nav-link" href="filters">Filters</Nav.Link>
            <Nav.Link className="custom-nav-link" href="AboutUs">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
