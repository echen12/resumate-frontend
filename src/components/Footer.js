import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {

  const footerStyle = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <Container fluid="md" >
      <Row style={footerStyle}>
        &copy; 2023 BCIT Hack the Break
      </Row>
    </Container>
  );
}

export default Footer
