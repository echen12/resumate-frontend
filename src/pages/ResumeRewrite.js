import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavBar from '../components/NavBar';
import {useTranslation} from "react-i18next";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";

import styled from 'styled-components'

const StyledP = styled.p`
  white-space: pre-wrap
`;

const ResumeRewrite = () => {
    const {t, i18n} = useTranslation('common');

    const location = useLocation();
    const state = location.state;
    console.log(state);
    console.log(typeof(state))

    const divStyle = {
        background: '#D9E2FC',
    };

    const[oldResume, setOldResume] = useState('')
    const[newResume, setNewResume] = useState('')

    const bodydata = new FormData()

    bodydata.append('resume', {state});

    useEffect(() => {
        axios({
            // method: "GET",
            method: "POST",
            url: "http://localhost:5000/results",
            // url: "http://localhost:5000/resumeResults"
            // data: {
            //     resume: {state}
            // },
            data : bodydata,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
        }).then(response => {
            // console.log(response.data[0])
            // console.log(response.data[1])
            // setOldResume(response.data[0])
            // setNewResume(response.data[1])

            setOldResume(state)
            setNewResume(response.data)
        })
    }, [null])

    // axios({
    //     method: "GET",
    //     url: "http://localhost:5000/resumeResults"
    // })
    // // .then(response => {
    // //     console.log(response.data)

    // //     const oldResume = response.data[0]
    // //     console.log(response.data[0])
    // //     console.log(response.data[1])
    // //     const newResume = response.data[1]
    // // })
    // .then(response => {
    //     return (
    //         <Container fluid>
    //             <NavBar></NavBar>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <Row>
    //                 <Col>
    //                     <Row>
    //                         <h1>New resume</h1>
    //                         <p>
    //                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //                         </p>
    //                     </Row>
    //                 </Col>
    //                 <Col>
    //                     <Row>
    //                         <h1>Old resume</h1>
    //                         <p>
    //                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    //                         </p>
    //                     </Row>
    //                 </Col>
    //             </Row>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             {/* <Row>
    //                 <Button variant="primary">Copy</Button>{' '}
    //                 <Button variant="primary">Save</Button>{' '}
    //             </Row> */}
    //             <Stack gap={2} className="col-md-5 mx-auto">
    //                 <Button variant="outline-primary" style={divStyle}>Copy</Button>
    //                 <Button variant="outline-primary" style={divStyle}>Save</Button>
    //             </Stack>
    //         </Container>
    //     )
    // });

    // axios({
    //     method: "GET",
    //     url: "http://localhost:5000/resumeResults"
    // }).then(response => {
    //     console.log(response.data[0])
    //     console.log(response.data[1])
    // });

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
                        <h1>{t("New Resume")}</h1>
                        <StyledP>
                            {newResume}
                        </StyledP>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h1>{t("Old Resume")}</h1>
                        <StyledP>
                            {oldResume}
                        </StyledP>
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
                <Button variant="outline-primary" style={divStyle}>{t("Copy")}</Button>
                <Button variant="outline-primary" style={divStyle}>{t("Save")}</Button>
            </Stack>
        </Container>
    )
    
}

export default ResumeRewrite