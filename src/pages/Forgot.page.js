import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/forgot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext , useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export default function Forgot() {

    //https://www.mongodb.com/docs/atlas/app-services/authentication/email-password/#password-resets
    //https://realm.mongodb.com/groups/635beabea043b419bbef7afa/apps/635bec53152200674f1871ed/auth/providers/local-userpass

    const navigate = useNavigate();
    const location = useLocation();

    //const { emailPasswordLogin } = useContext(UserContext);

    const [form, setForm] = useState({
        email : ""
    })

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/signin");
    }

    function onSubmit(){
       
    }

    return (
        <div className="app">
            <Container fluid>
                <Row>
                    <Col sm id="forgot" className="bg-light rounded-end">
                        <div className='sign-container'>
                            <Container fluid>
                            <Row className="justify-content-md-center mb-4">
                                    <Col lg="8" className="back_container">
                                        <Link to="/signin">
                                            <FontAwesomeIcon className='back' name="link_signin" icon={faArrowLeft}/>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center mb-4">
                                    <Col lg="8">
                                        <h1>Forgot your password?</h1>
                                        <p>No problem, reset it here.</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Col lg="8">
                                        <form id="pg_form" name="btn_forgot" onSubmit={onSubmit}>
                                            <div className='mb-4'>
                                                <label htmlFor="mail" className="label-text">Email</label>
                                                <input required type="email" className="form-control plh" id="mail" name="email" placeholder="Enter your email" onChange={onFormInputChange}></input>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <input type="submit" className='btn-enter' value="Reset password"></input>
                                            </div>
                                        </form>
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
