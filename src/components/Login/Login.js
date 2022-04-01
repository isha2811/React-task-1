import React, { useState } from "react";
import Feedback from "react-bootstrap/Feedback";
import validator from 'validator';
import {Redirect} from'react-router-dom';
import {Form,Row,Col,InputGroup,FormGroup, FormControl,ControlLabel} from "react-bootstrap";
import PropTypes from 'prop-types';
import './Style.css';
import {BsPersonCircle} from "react-icons/bs";
import {Button} from  '@material-ui/core';
import { useHistory} from 'react-router-dom';

    


function loginUser(credentials) {
 return { "token" :"token@123"}
 
}

 function Login({ setToken }) {
   const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validated, setValidated] = useState(false);

  const handleSubmit = e => {
  
      console.log("hi");
      console.log(email);
      console.log(password);

    e.preventDefault();
    const token = loginUser({
      email,
      password
    });
    console.log(token);
    if(password === "admin" && email ==="admin@g.com")
   { setToken(token);
    alert("login succesful");
  history.push("/home");
    
    
  }
  else{
      alert("Invalid User")
    setValidated(true);
    
    e.stopPropagation();
  } }
  


 /* const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (setLoggedIn === false) {
      event.preventDefault();
      event.stopPropagation();
    }
     else{

         return(<Redirect to="/landing" />);
     };
  };*/

  
 
  

  return (<div className ="center" style={{marginLeft:"580px",padding:'20px'}}>
    <h3><BsPersonCircle /></h3>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="4"controlId="formPlaintextEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required
           type="email"
            placeholder="abc@ok.com"  
            onChange={(e)=>setEmail(e.target.value)} 
          value={email} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Enter a valid email
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="formPlaintextPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid password
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className="mb-3"></Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button    variant="contained"
              color="primary"type="submit">Login</Button>
    </Form>
    </div>
  );
}

export default Login;
