import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Recipes Now</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Trending</Nav.Link>
            <Nav.Link href="#link">New</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Search by Occasion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lunch
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Desserts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Snacks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">Feed a Crowd</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Holiday Recipes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Weeknight Dinners</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Favorites
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;