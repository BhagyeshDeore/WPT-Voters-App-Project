import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Navigationbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><b>PollPulse</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Voterlist">
                            <Nav.Link>Voter list</Nav.Link>
                        </LinkContainer>
                        {/* <LinkContainer to="/dashboard">
                            <Nav.Link>Polls</Nav.Link>
                        </LinkContainer> */}
                        {/* <LinkContainer to="/PollLogic">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer> */}
                        {/* <LinkContainer to="/register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer> */}
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}