import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Recipes Now</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link >Trending</Nav.Link>
            <Nav.Link >New</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Search by Occasion" id="basic-nav-dropdown">
              <NavDropdown.Item >Breakfast</NavDropdown.Item>
              <NavDropdown.Item >Dinner</NavDropdown.Item>
              <NavDropdown.Item >Desserts</NavDropdown.Item>
              <NavDropdown.Item >Snacks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Feed a Crowd
              </NavDropdown.Item>
              <NavDropdown.Item >
                Holiday Recipes
              </NavDropdown.Item>
              <NavDropdown.Item>
                Weeknight Dinners
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
