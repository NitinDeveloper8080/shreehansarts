import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Shreehans Arts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="/services/video-editing">Video Editing</NavDropdown.Item>
              <NavDropdown.Item href="/services/film-making">Film Making</NavDropdown.Item>
              <NavDropdown.Item href="/services/media-consulting">Media Consulting</NavDropdown.Item>
              <NavDropdown.Item href="/services/studio-booking">Studio Booking</NavDropdown.Item>
              <NavDropdown.Item href="/services/equipment-availability">Equipment Availability</NavDropdown.Item>
              <NavDropdown.Item href="/services/video-production">Video Production</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Movies" id="movies-dropdown">
              <NavDropdown.Item href="/movies/jaggu-ki-lalten">Jaggu ki Lalten</NavDropdown.Item>
              {/* Add more movies here */}
            </NavDropdown>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
