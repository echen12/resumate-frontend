import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResumeUploader from "./ResumeUploader.js";

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function MainBottomButtons() {
    const divStyle = {
        background: '#D9E2FC'};
    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="outline-primary btn-primary" style={divStyle}>Upload Resume</Button>
            <Button variant="outline-primary  btn-primary" style={divStyle}>Analyze</Button>
        </Stack>
    );
}

export default MainBottomButtons