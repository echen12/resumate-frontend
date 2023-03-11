import { Card } from "react-bootstrap"
import Button from 'react-bootstrap/Button';


const CourseCard = ( props ) => {

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
                <Button variant="primary">Visit Course</Button>
            </Card.Body>
        </Card>
    )
}

export default CourseCard


