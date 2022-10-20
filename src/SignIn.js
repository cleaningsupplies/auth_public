import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/signin.css";

export default function Signin() {

    //https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI

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
                    <form>
                        <div className='mb-2'>
                            <label htmlFor="mail" className="label-text">Email</label>
                            <input type="email" className="form-control plh" id="mail" placeholder="Enter your email"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="password" className="label-text">Password</label>
                            <input type="password" className="form-control plh" id="password" placeholder="Enter your password"></input>
                        </div>
                        <div className='mb-3 forgot'>
                            <a href='/forgot' className='link'>Forgot password</a>
                        </div>
                        <div className="d-grid gap-2">
                            <Button className='btn-enter'>Sign in</Button>
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
                    Don't have account yet?&nbsp;<a href="/signup" className='link'>Sign up</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
