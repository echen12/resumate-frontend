import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavBar from '../components/NavBar';


const ResumeRewrite = () => {

    const divStyle = {
        background: '#D9E2FC',
    };


    return (
        <Container fluid>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <Row>
                        <h1>New resume</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h1>Old resume</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Row>
                <Button variant="primary">Copy</Button>{' '}
                <Button variant="primary">Save</Button>{' '}
            </Row> */}
            <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="outline-primary" style={divStyle}>Copy</Button>
                <Button variant="outline-primary" style={divStyle}>Save</Button>
            </Stack>
        </Container>
    )
}

export default ResumeRewrite