import '../css/app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

export default function Confirm({getName}) {
    // work in user context as well
    const navigate = useNavigate();
    const location = useLocation();

    const { confirmNewUser, emailPasswordLogin } = useContext(UserContext);

    const [form, setForm] = useState({
      name: "",
      email: "",
      password: ""
  });
  
  const onFormInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
  };


  const redirectNow = () => {
        let rplc = location.search;
        const redirectTo = location.search.replace(rplc.toString(), "");
        navigate(redirectTo ? redirectTo : "/");
    }
    //sl08031994@gmail.com

    useEffect(() => {
      confirm();
    },[])

    const confirm = async () => {
        try {
            let url = window.location;

            let token = new URLSearchParams(url.search).get('token');
            let tokenId = new URLSearchParams(url.search).get('tokenId');

            await confirmNewUser(token, tokenId);

        } catch (error) {
            alert(error);
        }
    };


    const onSubmit = async (event) => {
      event.preventDefault();
      try{
          const user = await emailPasswordLogin(form.email, form.password, form.name);
          if (user) {
              getName(user)
              redirectNow();
          }
      } catch (error) {
          if(error.statusCode === 409){
              alert("Your email address is already in use!");
              navigate("/signin");
          }else if(error.statusCode === 400){
              alert("Your password must contain at least 6 characters!");
          } else if(error.statusCode === 401){
              alert("Please confirm your email.");
          }else{
              alert(error);
          }
      }
  };


    //sl08031994@gmail.com
    //test123


    return (
      <div className="app">
      <Container fluid>
          <Row>
              <Col sm id="signup" className="bg-light rounded-end">
                  <div className='sign-container'>
                      <Container fluid>
                          <Row className="justify-content-md-center mb-4">
                              <Col xs lg="7">
                                  <h1>Confirmed!</h1>
                                  <p>Please sign in here.</p>
                              </Col>
                          </Row>
                          <Row className="justify-content-md-center">
                              <Col xs lg="7">
                                  <form id="form" name="btn_signup" onSubmit={onSubmit}>
                                      <div className='mb-2'>
                                          <label htmlFor="name" className="label-text">Name</label>
                                          <input required type="text" className="form-control plh" id="name" name="name" placeholder="Enter your name" onChange={onFormInputChange}></input>
                                      </div>
                                      <div className='mb-2'>
                                          <label htmlFor="mail" className="label-text">Email</label>
                                          <input required type="email" className="form-control plh" id="mail" name="email" placeholder="Enter your email" onChange={onFormInputChange}></input>
                                      </div>
                                      <div className='mb-5'>
                                          <label htmlFor="password" className="label-text">Password</label>
                                          <input required type="password" className="form-control plh" id="password" name="password" placeholder="Enter your password" onChange={onFormInputChange}></input>
                                      </div>
                                      <div className="d-grid gap-2">
                                          <input type="submit" className='btn-enter' value="Sign in"></input>
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
