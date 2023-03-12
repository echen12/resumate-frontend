import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'



    const {t, i18n} = useTranslation('common');

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("Job Description")}</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={9} 
                    placeholder="Paste your job description here" 
                    onChange={e => this.setState({ val: e.target.value })}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("Resume")}</Form.Label>
                <Form.Control as="textarea" rows={9} placeholder="Paste your resume here" />
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