import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  return (
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Zonal Congress</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sermon</Nav.Link>
            <Nav.Link href="#pricing">Livestream</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  )
}

export default Home