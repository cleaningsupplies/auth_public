import './App.css';
import SignIn from './SignIn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container fluid>
      <Row>
        <Col  xs={7} className="bg-light border rounded-end"><SignIn /></Col>
        <Col className="gradient">nice<br></br>to<br></br>see<br></br>you.</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
