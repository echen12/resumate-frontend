import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const divStyle = {
        background: '#001247',
    };
    return (
        // <Navbar expand="lg" fixed="top" style={divStyle}>
        <Navbar expand="lg" fixed="top" variant="dark" style={divStyle}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/Logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Resumate
                        </Navbar.Brand>
                {/* <Navbar.Brand href="#home" >Resumate</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar