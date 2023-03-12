import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox'
import MainBottomButtons from './components/MainBottomButtons';

import axios from 'axios';
import { useState, useEffect } from 'react'
import CourseCard from './components/CourseCard';
import MainComponents from './components/MainComponents';

import Options from './pages/Options';
import Courses from './pages/Courses';
import ResumeRewrite from './pages/ResumeRewrite';
import HomePage from './pages/HomePage';

const App = () => {
  const [courseData] = useState(null)

  const form = new FormData();

  const filePath = '/resources/Resume.pdf';

  form.append("files", filePath)

  axios({
    method: "GET",
    url: "http://localhost:5000/resumeResults"
}).then(response => {
    console.log(response.data)
});


  axios({
    method: 'PUT',
    url: 'http://127.0.0.1:5000/analyze',
    data: {
      data: form
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Content-Type": "multipart/form-data"
    },
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });


  // function postResumePdf() {
  //   axios({
  //     // mode: 'no-cors',
  //     method: 'POST',
  //     url: 'http://localhost:5000/temp/',
  //     data: {
  //       title: 'Fred',
  //       lastName: 'Flintstone',
  //     },
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  //       // 'Accept'       : 'application/json',
  //       // 'Content-Type' : 'application/json',
  //       // "Access-Control-Allow-Origin": "*",
  //       // "Access-Control-Allow-Methods": "*",
  //       // "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
  //     },
  //   }).then(function (response) {
  //     console.log(response);
  //   }).catch(function (error) {
  //     console.log(error);
  //   });
  // }

  return (
    <Container>
      {/* <HomePage></HomePage> */}
      {/* <Options></Options> */}
      {/* <Courses></Courses> */}
      {/* <ResumeRewrite></ResumeRewrite> */}
    </Container>
  )
}

export default App;
