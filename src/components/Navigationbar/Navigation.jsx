import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
const Navigation = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand><h3>GRAND MASTER CHEF</h3> </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <FaRegUserCircle style={{fontSize:'2rem'}}/>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;