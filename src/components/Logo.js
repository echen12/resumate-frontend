import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Logo() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col className="justify-content-center">
                    <Image src="https://placekitten.com/200/300" height="auto"></Image>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Logo;