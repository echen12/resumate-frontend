import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeUploader from "./ResumeUploader.js";

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function MainBottomButtons() {
    const divStyle = {
        background: '#8f8ab3',
        color: '#ffffff'
    };
    const button_style = {
        background: '#001247',
        color: '#ffffff'
    };



    return (
        <Stack gap={2} className="col-md-5 mx-auto" >
            <Button variant="outline-light btn-dark" style={divStyle}>Upload Resume</Button>
            <Button variant="outline-light  btn-dark" style={button_style}>Analyze</Button>
        </Stack>
    );
}

export default MainBottomButtons