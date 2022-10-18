import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/signin.css";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export default function Signin() {

    //https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI

  return (
    <div className='sign_container'>
    
        {/* <Card.Title>Please Log In</Card.Title> */}
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs lg="7">
                    <form>
                        <div>
                            <label htmlFor="mail" className="label-text">Email</label>
                            <input type="email" className="form-control" id="mail" placeholder="Enter your email"></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="label-text">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"></input>
                            <small>forgot password</small>
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="login">Login</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>

        <style type="text/css">{`
            .btn-login {
                background-color: #8b909a;
                border: none;
                color: white;
            }
        `}</style>
    </div>
  )
}
