import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navb(props) {
  return (
    <Navbar className="header" bg="light" expand="lg">
      <h1> John Doe </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="navmenu">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>

          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Project 4</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navb;
