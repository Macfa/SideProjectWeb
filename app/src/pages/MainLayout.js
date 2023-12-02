import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainLayout() {
  return (
    <div id="main">
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={10}>
            <div>
              <p>sdasd</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainLayout;