import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox'
import MainBottomButtons from './components/MainBottomButtons';
import ResumeRewrite from './pages/ResumeRewrite'
import Courses from './pages/Courses';
import Options from './pages/Options';

const App = () => (
  <Container>
    {/* <NavBar></NavBar>
    <br></br>
    <br></br>  
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <TextBox></TextBox>
    <MainBottomButtons></MainBottomButtons>
    {/* <ResumeRewrite></ResumeRewrite> */}
    <Options></Options>

  </Container>
)

export default App;
