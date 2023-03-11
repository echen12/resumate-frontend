import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox'
import MainBottomButtons from './components/MainBottomButtons';


const App = () => (
  <Container>
    <NavBar></NavBar>
    <Logo></Logo>
    <MainBottomButtons></MainBottomButtons>
  </Container>
)

export default App;
