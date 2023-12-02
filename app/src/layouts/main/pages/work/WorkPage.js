import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WorkPage.scss';

const list = () => {
  let items = [
    {
      id: 1,
      name: 'React',
      addr: 'https://youtube.com'
    },
    {
      id: 2,
      name: 'Vue',
      addr: 'https://youtube.com'
    }
  ];

  return (
    items.map((item,idx) => {
      return (
        <Col>
          <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        </Col>
      );
    })
  );
}

function WorkPage() {
  return (
    <>
    <div className='p-3 mt-3 text-center'>
      <p>완성본</p>
    </div>

    <Container fluid={true} id='main_section'>
      <Row className='justify-content-md-center'>
        { list() }
      </Row>
    </Container>
    </>
  );
}

export default WorkPage;