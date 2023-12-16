import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PlanPage.scss';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

let ValuePiece = Date;
let Value = ValuePiece;

const onChange = () => {
  console.log('test');
}

function MyApp() {
  const [value, onChange] = useState(Value(new Date()));

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

function PlanPage() {
  return (
    <>
    <div className='p-3 mt-3 text-center'>
      <p>완성본</p>
    </div>

    <div>
      { MyApp() }
    </div>
    </>
  );
}

export default PlanPage;