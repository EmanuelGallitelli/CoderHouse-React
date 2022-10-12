import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export function PrincipalNav() {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Play-Box</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Info">Info</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Games">Games</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Console">Console</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    );
}