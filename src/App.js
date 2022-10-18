import './css/app.css';
import Signin from './Signin';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col className="bg-light rounded-end"><Signin /></Col>
          <Col className="right_media">nice<br></br>to<br></br>see<br></br>you.</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
