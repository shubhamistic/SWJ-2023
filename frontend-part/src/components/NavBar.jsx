import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import NavLogo from "./../assets/logo-nav.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={NavLogo} alt="SWJ'23-Logo" width={"120px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to='/'><Nav.Link className="navLink">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link href="/about" className="navLink">About</Nav.Link></LinkContainer>
              <LinkContainer to="/teams"><Nav.Link href="/teams" className="navLink">Teams</Nav.Link></LinkContainer>
              <LinkContainer to="/sponsors"><Nav.Link href="/sponsors" className="navLink">Sponsors</Nav.Link></LinkContainer>
              {/* <LinkContainer to="/teams"><Nav.Link className="navLink">SWJ</Nav.Link></LinkContainer> */}
              <Link to="/register" className="custom-btn btn-register-nav">Register</Link>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
