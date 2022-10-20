import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/signup.css";

export default function Signup() {
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
                    <form>
                        <div className='mb-2'>
                            <label htmlFor="name" className="label-text">Name</label>
                            <input type="text" className="form-control plh" id="name" placeholder="Enter your name"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="mail" className="label-text">Email</label>
                            <input type="email" className="form-control plh" id="mail" placeholder="Enter your email"></input>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="password" className="label-text">Password</label>
                            <input type="password" className="form-control plh" id="password" placeholder="Enter your password"></input>
                        </div>
                        <div className="d-grid gap-2">
                            <Button className='btn-enter'>Sign up</Button>
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
                    Have account already?&nbsp;<a href="/signin" className='link'>Sign in</a>
                </Col>
            </Row>
        </Container>
      </div>
  )
}
