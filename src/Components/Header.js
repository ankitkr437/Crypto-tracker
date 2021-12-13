import React from "react";
import {Link} from 'react-router-dom';
import '../index'
import { Button, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/" style={{textDecoration:"none"}}>
              <Navbar.Brand style={{color:"Yellow",fontWeight:"bold"}}>
                  Crypto-Tracker
              </Navbar.Brand>
          </Link>
            <Nav className="me-auto">
              <NavDropdown title="USD" id="basic-nav-dropdown">
                <NavDropdown.Item>USD</NavDropdown.Item>
                <NavDropdown.Item>INR</NavDropdown.Item>
                <NavDropdown.Item>JPY</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
