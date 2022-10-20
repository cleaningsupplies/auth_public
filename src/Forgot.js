import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/forgot.css";

export default function Forgot() {
  return (
    <div className='sign-container'>
        <div className='back'>
          back
        </div>
        <Container fluid>
            <Row className="justify-content-md-center mb-4">
                <Col xs lg="8">
                    <h1>Forgot your password?</h1>
                    <p>No problem, reset here.</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <form>
                        <div className='mb-4'>
                            <label htmlFor="mail" className="label-text">Email</label>
                            <input type="email" className="form-control plh" id="mail" placeholder="Enter your email"></input>
                        </div>
                        <div className="d-grid gap-2">
                            <Button className='btn-enter'>Reset password</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
