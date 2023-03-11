import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'



function TextBox() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
}

// function Logo() {
//     return (
//     //     <Container>
//     //         <Row>
//     //             <Col></Col>
//     //             <Col className="justify-content-center">
//     //                 <Image src="https://placekitten.com/200/300" height="auto"></Image>
//     //             </Col>
//     //             <Col></Col>
//     //         </Row>
//     //     </Container>
//     // );
    
// }

export default TextBox;