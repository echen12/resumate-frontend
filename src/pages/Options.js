import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';
import CourseCard from '../components/CourseCard';
import {useTranslation} from "react-i18next";
import { useLocation, Link } from "react-router-dom";


const Options = () => {
    const {t, i18n} = useTranslation('common');
    const location = useLocation();
    const state = location.state;
    console.log(state);

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
                <Card.Body>
                    <Card.Title>insert image</Card.Title>
                    <Card.Text>
                        {t("Improve your resume now with AI")}
                    </Card.Text>
                    <Button variant="primary">{t("Rewrite now")}</Button>
                </Card.Body>
            </Card>
            <br></br>
            <br></br>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>insert image</Card.Title>
                    <Card.Text>
                        {t("Improve your skills by taking relevant courses.")}
                    </Card.Text>
                    <Button variant="primary">{t("Check out courses")}</Button>
                </Card.Body>
            </Card>


        </Container>
    );
}

export default Options