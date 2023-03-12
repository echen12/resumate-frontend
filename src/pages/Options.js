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
    console.log(state["jobDescription"])
    console.log(state["resume"])

    const cardStyle = {
        center: {
            marginLeft: "auto",
            marginRgiht: "auto",
        },
        
    }

    const buttonStyle = {
        background: '#8f8ab3',
        color: '#ffffff',
    }

    return (
        <Container>
            <NavBar></NavBar>
            <br></br>
            <br></br>   
            <br></br>
            <br></br>
            <br></br>
            <Card className="text-center border-0">
                <Card.Body>
                    <Card.Img className="card-img mb-3" src="/resume.png"></Card.Img>
                    <Card.Title>
                        {t("Improve your resume now with AI")}
                    </Card.Title>
                    {/* <Card.Text>
                        {t("Improve your resume now with AI")}
                    </Card.Text> */}
                    <Link to = "/rewrite" state={state["resume"]}>
                        <Button style={buttonStyle} variant="primary">{t("Rewrite now")}</Button>
                    </Link>
                </Card.Body>
            </Card>
            <br></br>
            <br></br>
            <Card className="text-center border-0">
                <Card.Body>
                <Card.Img className="card-img mb-3" src="/courses.png"></Card.Img>
                    <Card.Title>
                        {t("Improve your skills by taking relevant courses.")}
                    </Card.Title>
                    {/* <Card.Text>
                        {t("Improve your skills by taking relevant courses.")}
                    </Card.Text> */}
                    <Link to="/courses" state={state}>
                        <Button style={buttonStyle} variant="primary">{t("Check out courses")}</Button>
                    </Link>
                </Card.Body>
            </Card>


        </Container>
    );
}

export default Options