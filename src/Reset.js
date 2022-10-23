import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "./css/forgot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Reset({changeForm}) {

    function change(e){
        e.preventDefault();
        changeForm(e.target.getAttribute("name"));
    }

    return (
        <div className='sign-container'>
            <Container fluid>
            <Row className="justify-content-md-center mb-4">
                    <Col lg="8" className="back_container">
                        <FontAwesomeIcon className='back' name="link_signin" onClick={change} icon={faArrowLeft}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col lg="8">
                        <h1>Password reset!</h1>
                        <p>Please check your mail inbox.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
