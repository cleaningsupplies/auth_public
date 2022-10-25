import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/signin.css";

export default function Signin({changeForm}) {

    function change(e){
        e.preventDefault();
        changeForm(e.target.getAttribute("name"));
        document.querySelector("#page_form").reset();
    }

    return (
        <div className='sign-container'>
            <Container fluid>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="7">
                        <h1>Sign in.</h1>
                        <p>Sign in to your account here.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="7">
                        <form id="page_form" name="btn_signin" onSubmit={change}>
                            <div className='mb-2'>
                                <label htmlFor="mail" className="label-text">Email</label>
                                <input required type="email" className="form-control plh" id="mail" placeholder="Enter your email"></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="password" className="label-text">Password</label>
                                <input required type="password" className="form-control plh" id="password" placeholder="Enter your password"></input>
                            </div>
                            <div className='mb-3 forgot'>
                                <span className='link' name="link_forgot" onClick={change}>Forgot password</span>
                            </div>
                            <div className="d-grid gap-2">
                                <input type="submit" className='btn-enter' value="Sign in"></input>
                            </div>
                        </form>
                    </Col>
                </Row>
                {/* <Row className="justify-content-md-center">
                    <Col xs lg="7">
                        <div className="d-grid gap-2">
                            <Button variant="login">with google</Button>
                        </div>
                    </Col>
                </Row> */}
                <Row className="justify-content-md-center mt-5">
                    <Col xs lg="7" className="bottom-text">
                        Don't have account yet?&nbsp;<span className='link' name="link_signup" onClick={change}>Sign up</span>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}
