import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PlanPage.scss';

function PlanPage() {
  return (
    <>
    <div className='p-3 mt-3 text-center'>
      <p>완성본</p>
    </div>

    <Container fluid={true} id='main_section'>
      <Row className='justify-content-md-center'>
      </Row>
    </Container>
    </>
  );
}

export default PlanPage;