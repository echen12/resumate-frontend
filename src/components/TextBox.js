import Form from 'react-bootstrap/Form'
import {useTranslation} from "react-i18next";



function TextBox() {
    const {t} = useTranslation('common');

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("Job Description")}</Form.Label>
                <Form.Control as="textarea" rows={9} placeholder="Paste your job description here" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("Resume")}</Form.Label>
                <Form.Control as="textarea" rows={9} placeholder="Paste your resume here" />
            </Form.Group>
        </Form>
        
    );
}

export default TextBox;