import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox'
import MainBottomButtons from './components/MainBottomButtons';

import axios from 'axios';
import { useState, useEffect } from 'react'
import CourseCard from './components/CourseCard';

const App = () => {
  const [courseData] = useState(null)

  const form = new FormData();

  const filePath = '/resources/Resume.pdf';

  form.append("files", filePath)


  function getCourseData() {
    axios({
      method: "GET",
      url: "http://localhost:5000"
    })
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  axios({
    // mode: 'no-cors',
    method: 'POST',
    url: 'http://127.0.0.1:5000/temp',
    data: {
      id: 11,
      name: "Tom Brady",
      username: "Brad",
      email: "tombrad@asd.com",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      // 'Accept'       : 'application/json',
      // 'Content-Type' : 'application/json',
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "*",
      // "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
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
      <NavBar></NavBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextBox></TextBox>
      <MainBottomButtons></MainBottomButtons>
    </Container>
  )
}

export default App;
