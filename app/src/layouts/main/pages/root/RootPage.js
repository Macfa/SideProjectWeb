import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RootPage.scss';

function RootPage() {
  return (
    <>
    <div className='p-3 mt-3 text-center'>
      <p></p>
    </div>

    <Container fluid={true} id=''>
      <Row>
        <Col>
          <p>asd</p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default RootPage;