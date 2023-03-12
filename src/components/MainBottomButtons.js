import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const MainBottomButtons = props =>{
    const button_style = {
        background: '#8f8ab3',
        color: '#ffffff',
    };

    return (
        <Stack gap={2} className="col-md-5 mx-auto" >
            <Button variant="outline-light  btn-dark" style={button_style}>Analyze</Button>
            <div className="bg-light "></div>
            <div className="bg-light "></div>
            <div className="bg-light "></div>
        </Stack>
    );
}

export default MainBottomButtons
