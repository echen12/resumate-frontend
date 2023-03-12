import TextBox from './TextBox.js';
import MainBottomButtons from './MainBottomButtons.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import React, { Component, useState } from "react";
//import { useState, useEffect } from 'react'
import axios from 'axios';
import {useTranslation} from "react-i18next";

class MainComponents extends Component {
    //[ state ] = useState("");
    button_style = {
        background: '#8f8ab3',
        color: '#ffffff',
    };

    state = {
        jobDescription: "",
        resume: ""
    };

    // onSubmit = () => {
    //     axios({
    //         method: 'POST',
    //         url: 'http://127.0.0.1:5000/job_resume/',
    //         data: this.state,
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    //         },
    //       }).then(response => {
    //         console.log(response.data);
    //       }).catch(error => {
    //         console.log(error);
    //       });
    // };

    render() {
        return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={9} 
                            placeholder="Paste your job description here" 
                            onChange={e => this.setState({ jobDescription: e.target.value })}
                            value={this.state.jobDescription}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Resume</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={9}
                            placeholder="Paste your resume here"
                            onChange={e => this.setState({ resume: e.target.value })}
                            value={this.state.resume}
                            />
                    </Form.Group>
                </Form>
                <Stack gap={2} className="col-md-5 mx-auto" >
                    {/* <Button variant="outline-light btn-dark" style={divStyle}>Upload Resume</Button> */}
                    <Button 
                        variant="outline-light  btn-dark" 
                        style={this.button_style}
                        onClick={this.onSubmit}>
                            Analyze
                        </Button>
                    <div className="bg-light "></div>
                    <div className="bg-light "></div>
                    <div className="bg-light "></div>
                </Stack>
            </>
        );
    }
    
}

export default MainComponents