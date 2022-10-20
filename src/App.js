import './css/app.css';
import Signin from './Signin';
import Signup from './Signup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forgot from './Forgot';

function App() {
  return (
    <div className="app">
      <Container fluid>
        <Row>
          {/* <Col className="bg-light rounded-end"><Signin /></Col> */}
          {/* <Col className="bg-light rounded-end"><Signup /></Col> */}
          <Col className="bg-light rounded-end"><Forgot /></Col>
          <Col className="right_media">nice<br></br>to<br></br>see<br></br>you.</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
