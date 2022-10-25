import './css/app.css';
import Signin from './Signin';
import Signup from './Signup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forgot from './Forgot';
import Reset from './Reset';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [name, setName] = useState("");
  
  function changeForm(item, n = name){

    const signin = document.querySelector("#signin");
    const signup = document.querySelector("#signup");
    const forgot = document.querySelector("#forgot");
    const reset = document.querySelector("#reset");
    const right_media = document.querySelector(".right_media");
    const login_media = document.querySelector(".login_media");
    setName("");
    right_media.style.display = "flex";
    login_media.style.display = "none";

    switch(item){
      case "link_signup": 
        signin.style.display = "none";
        signup.style.display = "block";
        break;
      case "link_signin":
        forgot.style.display = "none";
        reset.style.display = "none";
        signup.style.display = "none";
        signin.style.display = "block";
        break;
      case "link_forgot":
        signin.style.display = "none";
        forgot.style.display = "block";
        break;
      case "btn_signup":
        setName(n);
        signup.style.display = "none";
        right_media.style.display = "none";
        login_media.style.display = "flex";
        break;
      case "btn_signin":
        setName("Steffi");
        signin.style.display = "none";
        right_media.style.display = "none";
        login_media.style.display = "flex";
        break;
      case "btn_forgot":
        forgot.style.display = "none";
        reset.style.display = "block";
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
          <Col sm id="signin" className="bg-light rounded-end"><Signin changeForm={changeForm} /></Col>
          <Col sm id="signup" className="bg-light rounded-end"><Signup changeForm={changeForm} /></Col>
          <Col sm id="forgot" className="bg-light rounded-end"><Forgot changeForm={changeForm} /></Col>
          <Col sm id="reset" className="bg-light rounded-end"><Reset changeForm={changeForm} /></Col>
          <Col sm className="right_media">nice<br></br>to<br></br>see<br></br>you{name}.</Col>
          <Col className="login_media">
            <div className='logout_container'>
              <FontAwesomeIcon className='logout' icon={faArrowRightFromBracket} onClick={()=> changeForm("link_signin")}/>
            </div>
            <br></br>hi<br></br>{name}!</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
