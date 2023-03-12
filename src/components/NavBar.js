import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageDropdown from './LanguageDropdown';
import Col from 'react-bootstrap/Col';
import {useTranslation} from "react-i18next";



const NavBar = () => {
    const {t} = useTranslation('common');


    const divStyle = {
        background: '#001247',
    };
    
    return (
        // <Navbar expand="lg" fixed="top" style={divStyle}>
        <Navbar expand="lg" fixed="top" variant="dark" style={divStyle}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/Logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Resumate
                </Navbar.Brand>
                <Col>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">{t('Home')}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                {/* <Navbar.Brand href="#home" >Resumate</Navbar.Brand> */}
                <LanguageDropdown></LanguageDropdown>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}

export default NavBar