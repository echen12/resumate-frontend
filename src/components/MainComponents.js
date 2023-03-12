import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const MainComponents = () => {
    const [jobDescription, setJobDescription] = useState("")
    const [resume, setResume] = useState("")
    const {t} = useTranslation('common');


    const buttonStyle = {
        background: '#8f8ab3',
        color: '#ffffff',
        width: '100%'
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{t("Job description")}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={9}
                        placeholder={t("Paste your job description here")}
                        onChange={e => setJobDescription(e.target.value)}
                        value={jobDescription}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{t("Resume")}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={9}
                        placeholder={t("Paste your resume here")}
                        onChange={e => setResume(e.target.value)}
                        value={resume}
                    />
                </Form.Group>
            </Form>
            <Stack gap={2} className="col-md-5 mx-auto" >
                {/* <Button variant="outline-light btn-dark" style={divStyle}>Upload Resume</Button> */}
                <Link to="/options" state={{jobDescription, resume}}>
                    <Button
                        variant="outline-light  btn-dark"
                        style={buttonStyle}
                    >
                        {t("Analyze")}
                    </Button>
                </Link>
                <div className="bg-light "></div>
                <div className="bg-light "></div>
                <div className="bg-light "></div>
            </Stack>
        </>
    );


}

export default MainComponents