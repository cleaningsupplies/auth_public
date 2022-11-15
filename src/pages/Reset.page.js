import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/forgot.css";
import { useContext , useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export default function Reset() {

    const navigate = useNavigate();
    const location = useLocation();

    const { resetPassword } = useContext(UserContext);

    const [form, setForm] = useState({
        password : ""
    })

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        let rplc = location.search;
        const redirectTo = location.search.replace(rplc.toString(), "");
        navigate(redirectTo ? redirectTo : "/signin");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let url = window.location;

            let token = new URLSearchParams(url.search).get('token');
            let tokenId = new URLSearchParams(url.search).get('tokenId');

            await resetPassword(token, tokenId, form.password);
            alert("Your password was reset!")

            redirectNow();
        } catch (error) {
            if(error.statusCode === 400){
                alert("Your password must contain at least 6 characters!");
            } else if(error.statusCode === 404){
                alert("Your reset link was used already or has been expired.");
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
                    <Col sm id="forgot" className="bg-light rounded-end">
                        <div className='sign-container'>
                            <Container fluid>
                                <Row className="justify-content-md-center mb-4">
                                    <Col lg="8">
                                        <h1>Reset your password here!</h1>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Col lg="8">
                                        <form id="pg_form" name="btn_forgot" onSubmit={onSubmit}>
                                            <div className='mb-5'>
                                                <label htmlFor="password" className="label-text">New Password</label>
                                                <input required type="password" className="form-control plh" id="password" name="password" placeholder="Enter your new password" onChange={onFormInputChange}></input>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <input type="submit" className='btn-enter' value="Save password"></input>
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
