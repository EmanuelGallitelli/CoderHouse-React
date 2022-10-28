import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { SiCoffeescript } from 'react-icons/si';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';

export function PrincipalNav() {
    return (
        <Fragment>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><SiCoffeescript /> Cupful</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Info">Info</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Bowl">Bowl</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Mug">Mug</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
    </Fragment>
    );
}