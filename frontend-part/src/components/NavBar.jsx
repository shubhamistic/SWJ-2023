import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import NavLogo from "./../assets/logo-nav.png";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar bg="white" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
            <img src={NavLogo} alt="SWJ'23-Logo" width={"100px"} />
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
              <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link href="/about">About</Nav.Link></LinkContainer>
              <LinkContainer to="/teams"><Nav.Link href="/teams">Teams</Nav.Link></LinkContainer>
              <LinkContainer to="/sponsors"><Nav.Link href="/sponsors">Sponsors</Nav.Link></LinkContainer>
              <LinkContainer to="/teams"><Nav.Link>SWJ</Nav.Link></LinkContainer>
              <Button variant="outline-success">Register</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
