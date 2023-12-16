import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WorkPage.scss';
import { NavLink } from 'react-router-dom';

const list = () => {
  let items = [
    {
      id: 1,
      title: 'planet',
      desc: 'Comunity Site',
      spec: 'laravel docker git',
    },
    {
      id: 2,
      title: 'tobe',
      desc: 'to build something',
      spec: '',
    },
    {
      id: 3,
      title: 'tobe',
      desc: 'to build something',
      spec: '',
    },
    {
      id: 4,
      title: 'tobe',
      desc: 'to build something',
      spec: '',
    }
  ];

  return (
    items.map((item,idx) => {
      return (
        <Col md={3} lg={2} sm={6}>
          <div>
            <NavLink to={"/work/" + item.id}>{item.title}</NavLink>
            <p>{item.desc}</p>
          </div>
        </Col>
      );
    })
  );
}

function WorkPage() {
  return (
    <>
    <Container id='main_section'>
      <Row className='justify-content-around'>
        { list() }
      </Row>
    </Container>
    </>
  );
}

export default WorkPage;