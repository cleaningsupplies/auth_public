import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "../css/signin.css";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import '../css/app.css';

export default function Confirm() {

    const navigate = useNavigate();
    const location = useLocation();

    const { confirmNewUser } = useContext(UserContext);

    const [form, setForm] = useState({
        name: "",
    });

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        let rplc = location.search;
        const redirectTo = location.search.replace(rplc.toString(), "");
        navigate(redirectTo ? redirectTo : `/signin?name=${form.name}`);
    }

    useEffect(() => {
      confirm(); // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const confirm = async () => {
        try {
            let url = window.location;

            let token = new URLSearchParams(url.search).get('token');
            let tokenId = new URLSearchParams(url.search).get('tokenId');

            await confirmNewUser(token, tokenId);
        } catch (error) {
            alert("Oh, something went wrong. Please try again later.");
            console.error(error);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        redirectNow();
    };

    return (
        <div className="app">
        <Container fluid>
            <Row>
                <Col sm id="signin" className="bg-light rounded-end">
                    <div className='sign-container'>
                        <Container fluid>
                            <Row className="justify-content-md-center mb-4">
                                <Col xs lg="7">
                                    <h1>Mail confirmed!</h1>
                                    <p>Please enter your details here.</p>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs lg="7">
                                    <form id="page_form" name="btn_signin" onSubmit={onSubmit}>
                                        <div className='mb-5'>
                                            <label htmlFor="name" className="label-text">Name</label>
                                            <input required type="text" className="form-control plh" id="name" name="name" placeholder="Enter your name" onChange={onFormInputChange}></input>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <input type="submit" className='btn-enter' value="Save"></input>
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
