import {
  MainNavbar,
  IconsContainer,
  FbIcon,
  YoutubeIcon,
  GithubIcon,
} from "./element";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarCom() {
  return (
    <MainNavbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Sasta Daraz</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/shop">Shop</Link>
              </Nav.Link>
            </Nav>
            <IconsContainer>
              <FbIcon />
              <YoutubeIcon />
              <GithubIcon />
            </IconsContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </MainNavbar>
  );
}

export default NavbarCom;
