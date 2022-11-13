import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/forgot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext , useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export default function Forgot({getMail}) {

    const navigate = useNavigate();
    const location = useLocation();

    const { resendResetPassword } = useContext(UserContext);

    const [form, setForm] = useState({
        email : ""
    })

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        getMail(form.email);
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/mailsentreset");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await resendResetPassword(form.email);
            redirectNow();
        } catch (error) {
            if (error.statusCode === 404) {
                alert("Oops, we don't recognize your e-mail address. You might want to check if there's a spelling mistake.");
            } else {
                alert(error);
            }
        }
    };

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
