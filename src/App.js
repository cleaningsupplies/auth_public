import './css/app.css';
import Signin from './Signin';
import Signup from './Signup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forgot from './Forgot';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  
  function changeForm(item){

    const signin = document.querySelector("#signin");
    const signup = document.querySelector("#signup");
    const forgot = document.querySelector("#forgot");
    setName(".");

    switch(item){
      case "link_signup": 
        signin.style.display = "none";
        signup.style.display = "block";
        break;
      case "link_signin":
        forgot.style.display = "none";
        signup.style.display = "none";
        signin.style.display = "block";
        break;
      case "link_forgot":
        signin.style.display = "none";
        forgot.style.display = "block";
        break;
      case "btn_signup":
        signup.style.display = "none";
        //signin.style.display = "block";
        break;
      case "btn_signin":
        signin.style.display = "none";
        setName(" Steffi.");
        //signin.style.display = "block";
        break;
      case "btn_forgot":
        forgot.style.display = "none";
        //signin.style.display = "block";
        break;
      default:
        changeForm("link_signin");
        break;
    }
  }

  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col id="signin" className="bg-light rounded-end"><Signin changeForm={changeForm} /></Col>
          <Col id="signup" className="bg-light rounded-end"><Signup changeForm={changeForm} /></Col>
          <Col id = "forgot" className="bg-light rounded-end"><Forgot changeForm={changeForm} /></Col>
          <Col className="right_media">nice<br></br>to<br></br>see<br></br>you{name}.</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
