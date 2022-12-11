import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MainNavbar } from "./element";

function NavbarCom() {
  return (
    <MainNavbar>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Recipe App</Navbar.Brand>
        </Container>
      </Navbar>
    </MainNavbar>
  );
}

export default NavbarCom;
