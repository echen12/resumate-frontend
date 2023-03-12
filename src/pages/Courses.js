import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/NavBar';
import CourseCard from '../components/CourseCard';


const Courses = () => {
    
    const courseStyle = {
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
            
            <Col class="overflow-auto border">
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
                <CourseCard title={"tets title"} text={"fdsas"} />
            </Col>

        </Container>
    );
}

export default Courses