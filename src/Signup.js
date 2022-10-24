import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/signup.css";

export default function Signup({changeForm}) {

    function change(e){
        e.preventDefault();
        changeForm(e.target.getAttribute("name"));
        document.querySelector("#form").reset();
    }
    
    return (
        <div className='sign-container'>
            <Container fluid>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="7">
                        <h1>Sign up.</h1>
                        <p>Create your account here.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="7">
                        <form name="btn_signup" onSubmit={change}>
                            <div className='mb-2'>
                                <label htmlFor="name" className="label-text">Name</label>
                                <input required type="text" className="form-control plh" id="name" placeholder="Enter your name"></input>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="mail" className="label-text">Email</label>
                                <input required type="email" className="form-control plh" id="mail" placeholder="Enter your email"></input>
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="password" className="label-text">Password</label>
                                <input required type="password" className="form-control plh" id="password" placeholder="Enter your password"></input>
                            </div>
                            <div className="d-grid gap-2">
                                <input type="submit" className='btn-enter' value="Sign up"></input>
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
                        Have account already?&nbsp;<span className='link' name="link_signin" onClick={change}>Sign in</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
