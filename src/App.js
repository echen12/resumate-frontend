import './App.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useState } from 'react'
import HomePage from './pages/HomePage';

const App = () => {
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

  return (
    <Container>
      <HomePage></HomePage>
    </Container>
  )
}

export default App;
