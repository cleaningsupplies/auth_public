import '../css/app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
 
export default function Home(props) {
 const { logOutUser } = useContext(UserContext);
 
 const logOut = async () => {
   try {
     const loggedOut = await logOutUser();
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }
 
 return (
  <div className="app">
    <Container fluid>
      <Row>
        <Col className="login_media">
            <div className='logout_container'>
              <FontAwesomeIcon className='logout' icon={faArrowRightFromBracket} onClick={logOut}/>
            </div>
          <br></br>hi<br></br>{props.name}!
        </Col>
      </Row>
    </Container>
  </div>
 )
}