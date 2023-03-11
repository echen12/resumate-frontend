import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import Logo from './components/TextBox'
import MainBottomButtons from './components/MainBottomButtons';
import ResumeRewrite from './pages/ResumeRewrite'
import Courses from './pages/Courses';

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
    <Logo></Logo>
    <MainBottomButtons></MainBottomButtons> */}
    {/* <ResumeRewrite></ResumeRewrite> */}
    <Courses></Courses>
  </Container>
)

export default App;
