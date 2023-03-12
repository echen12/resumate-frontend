import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";


const CourseCard = ( props ) => {
    const {t, i18n} = useTranslation('common');

    const cardStyle = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <Card style={cardStyle}>
            <Card.Body >
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Link to={props.url}>
                    <Button variant="primary">{t("Visit Course")}</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CourseCard


