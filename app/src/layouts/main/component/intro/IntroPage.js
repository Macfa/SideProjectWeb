import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import './IntroPage.scss';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';



const techArray = [
  {
    type: '커뮤니티',
    techs: [ 'laravel', 'docker', 'git', 'aws' ]
  },
  {
    type: '안내사이트',
    techs: [ 'react', 'scss', 'git', 'docker' ]
  },
  {
    type: '미정',
    techs: [ 'swift' ]
  },

];

const introContent = `
## Macfa
---
| Syntax      | Description |
| :----:        |    :---   |
| E-mail | kombo6768@gmail.com |
| Github | https://github.com/Macfa |
---
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
`;

function IntroPage() {
  return (
    <div className='markdown-body'>
      <ReactMarkdown remarkPlugins={[gfm]} children={introContent} />
    </div>
  );
}

export default IntroPage;
