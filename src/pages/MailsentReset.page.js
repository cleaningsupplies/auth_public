import '../css/app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export default function MailsentReset(props) {

    const { resendConfirmationMail } = useContext(UserContext);

    const navigate = useNavigate();

    const resendMail = async (event) => {
        let email = props.mail;
        event.preventDefault();
        try{
            const user = await resendConfirmationMail(email);
            if (user) {
                alert(user)
            }
        } catch (error) {
            if(error.statusCode === 400){
                alert("You already reset your password!");
                navigate("/signin");
            } else{
                alert("Oh, something went wrong. Please try again later.");
                console.error(error);
            }
        }
    };
    

    return (
        <div className="app">
            <Container fluid>
                <Row>
                    <Col sm id="signup" className="bg-light rounded-end">
                        <div className='sign-container'>
                            <Container fluid>
                                <Row className="justify-content-md-center mb-4">
                                    <Col xs lg="7">
                                        <h1>Mail sent!</h1>
                                        <p>Please check your email inbox.</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Col xs lg="7">
                                            <div className="d-grid gap-2">
                                                <input type="button" className='btn-enter' value="Resend mail" onClick={resendMail}></input>
                                            </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col sm className="right_media">nice<br></br>to<br></br>see<br></br>you.</Col>
                </Row>
            </Container>
        </div>
    )
}
