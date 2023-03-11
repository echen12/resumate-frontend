import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Logo from './components/Logo'
import MainBottomButtons from './components/MainBottomButtons';

import axios from 'axios';
import { useState, useEffect } from 'react'

const App = () => {
  const [ courseData ] = useState(null)

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

  function postResumePdf() {
      axios({
        // mode: 'no-cors',
        method: 'POST',
        url: 'http://localhost:5000/temp/',
        data: {
            title: 'Fred',
            lastName: 'Flintstone',
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
  }

  return (
    <Container>
      <NavBar></NavBar>
      <Logo></Logo>
      <MainBottomButtons onClick={postResumePdf()}></MainBottomButtons>
    </Container>
  )
}

export default App;
