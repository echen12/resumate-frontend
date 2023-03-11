import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';
import CourseCard from '../components/CourseCard';


const Options = () => {

    const cardStyle = {
        center: {
            marginLeft: "auto",
            marginRgiht: "auto"
        }
    }


    return (
        <Container>
            <NavBar></NavBar>
            <br></br>
            <br></br>   
            <br></br>
            <br></br>
            <br></br>
            <Card className="text-center">
                <Card.Header>Rewrite Resume</Card.Header>
                <Card.Body>
                    <Card.Title>insert image</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Rewrite Now</Button>
                </Card.Body>
            </Card>
            <br></br>
            <br></br>
            <Card className="text-center">
                <Card.Header>Courses</Card.Header>
                <Card.Body>
                    <Card.Title>insert image</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go to courses</Button>
                </Card.Body>
            </Card>


        </Container>
    );
}

export default Options