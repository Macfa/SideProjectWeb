import ReactMarkdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RootPage.scss';
import gfm from 'remark-gfm';
import styled from 'styled-components';

// styled
const colStyle = styled(Col)`

`;

const page = `
# Welcome to SandBox  
  
- 완성본 안내 및 미리보기   
- 작업 과정 블로그 정리
- 간단한 일정 안내


| type | Description |
| :----: |    :---   |
| Nick   | Macfa |
| Github | [https://github.com/Macfa](https://github.com/Macfa) |
| Blog   | [https://macfa.tistory.com/](https://macfa.tistory.com)
| E-mail | kombo6768@gmail.com |

`;

function RootPage() {
  return (
    <>
    <Container fluid="xs" className='n-m n-p'>
      <Row className='justify-content-center'>
        <Col md={8} lg={8} id='section' className='p-5'>
          <ReactMarkdown remarkPlugins={[gfm]} children={page} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default RootPage;