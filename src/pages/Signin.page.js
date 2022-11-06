import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import "../css/signin.css";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import '../css/app.css';

export default function Signin({getName}) {

    const navigate = useNavigate();
    const location = useLocation();

    const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);
 
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    
    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    
    // This function will redirect the user to the
    // appropriate page once the authentication is done.
    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/");
    }
    
    // Once a user logs in to our app, we don’t want to ask them for their
    // credentials again every time the user refreshes or revisits our app, 
    // so we are checking if the user is already logged in and
    // if so we are redirecting the user to the home page.
    // Otherwise we will do nothing and let the user to login.
    const loadUser = async () => {
        if (!user) {
            const fetchedUser = await fetchUser();
            if (fetchedUser) {
            // Redirecting them once fetched.
            redirectNow();
            }
        }
    }
    
    // This useEffect will run only once when the component is mounted.
    // Hence this is helping us in verifying whether the user is already logged in
    // or not.
    useEffect(() => {
        loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await emailPasswordLogin(form.email, form.password);
            if (user) {
                getName(user);
                redirectNow();
            }
        } catch (error) {
            if (error.statusCode === 401) {
                alert("Password or username wrong. Please try again!");
            } else {
                alert(error);
            }
        }
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
                                        <h1>Sign in.</h1>
                                        <p>Sign in to your account here.</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Col xs lg="7">
                                        <form id="page_form" name="btn_signin" onSubmit={onSubmit}>
                                            <div className='mb-2'>
                                                <label htmlFor="mail" className="label-text">Email</label>
                                                <input required type="email" className="form-control plh" id="mail" name="email" placeholder="Enter your email" onChange={onFormInputChange}></input>
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="password" className="label-text">Password</label>
                                                <input required type="password" className="form-control plh" id="password" name="password" placeholder="Enter your password" onChange={onFormInputChange}></input>
                                            </div>
                                            <div className='mb-3 forgot'>
                                                <Link className='link' to="/forgot">Forgot password</Link>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <input type="submit" className='btn-enter' value="Sign in"></input>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                                <Row className="justify-content-md-center mt-5">
                                    <Col xs lg="7" className="bottom-text">
                                        Don't have account yet?&nbsp;<Link className='link' to="/signup">Sign up</Link>
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
