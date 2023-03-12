import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import CourseCard from '../components/CourseCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';



const Courses = () => {
    const location = useLocation();
    const state = location.state;
    localStorage.setItem('infoState', state);

    const infoState = localStorage.getItem('infoState', state);

    const courseStyle = {
        center: {
            marginLeft: "auto",
            marginRgiht: "auto"
        },
        spinnerStyle: {
            display: "flex",
            justifyContent: "center"
        },
        spinnerBorder: {
            border: "1px solid red"
        }
    }

    const form = new FormData();
    form.append('resume', infoState['resume']);
    form.append('job_description', infoState['jobDescription']);

    const [courseDictionary, setCourseDictionary] = useState('')

    useEffect(() => {
        axios({
            method: "POST",
            url: "http://localhost:5000/courses",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
            data: form,
        }).then(response => {
            setCourseDictionary(response.data);
        })
    }, [null]);

    if (Object.keys(courseDictionary).length != 0) {
        return (
            <Container>
                <NavBar></NavBar>
                <br></br>
                <br></br>
                <br></br>

                <Col className="overflow-auto border">
                    {
                        Object.keys(courseDictionary).map((key, index) => {
                            return <CourseCard url={courseDictionary[key]} title={key} />
                        })
                    }
                </Col>

            </Container>
        );
    } else {
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
}

export default Courses