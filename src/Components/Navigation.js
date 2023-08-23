import React from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = ({ setTitleFilter, titleFilter }) => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container  fluid>
        <Navbar.Brand href="#">Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Animation</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Series
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                K-drama
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
          
              value={titleFilter}
              placeholder="What are you looking for?.."
              style={{ width: '300px', marginRight: '20px' }}
              onChange={(e) => setTitleFilter(e.target.value)}
              className="custom-placeholder-width"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
