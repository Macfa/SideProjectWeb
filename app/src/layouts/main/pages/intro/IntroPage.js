import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import './IntroPage.scss';

function IntroPage() {
  return (
    <>
    <div className='p-3 mt-3 text-center'>
      <p>Who's Macfa</p>
    </div>

    <Container id='main_section'>
      <Row className='justify-content-center'>
        <Col xs={8}>
          <div>
              <Container>
                <Row>
                  <Col><h3>Macfa</h3></Col>
                </Row>
                <Row>
                  <Col>E-mail</Col>
                  <Col>kombo6768@gmail.com</Col>
                </Row>
                <Row>
                  <Col>Github</Col>
                  <Col><NavLink to='https://github.com/Macfa' target="_blank" rel="noopener noreferrer">https://github.com/Macfa</NavLink></Col>
                </Row>
                <Row>
                  <Col>Technologies used in the project</Col>
                  <Col>
                    <div className="d-flex align-items-start flex-column">
                      <div className="p-1">커뮤니티 | laravel, docker, git, aws</div>
                      <div className="p-1">현재 사이트 | react, scss, git, docker</div>
                      <div className="p-1">미정 | swift</div>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default IntroPage;