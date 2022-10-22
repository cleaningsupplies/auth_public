import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/forgot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Forgot({changeForm}) {

    function change(e){
        e.preventDefault();
        changeForm(e.target.getAttribute("name"));
    }

    return (
        <div className='sign-container'>
            <div className='back' name="link_signin" onClick={change}>
                <FontAwesomeIcon icon={faArrowLeft} />
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
                                <input required type="email" className="form-control plh" id="mail" placeholder="Enter your email"></input>
                            </div>
                            <div className="d-grid gap-2">
                                <Button className='btn-enter' name="btn_forgot" onClick={change}>Reset password</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
