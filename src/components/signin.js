
import './signin.css';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Signin() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
      email:"", password:""
  });

  let name, value;
  const handleInputs = (event) => {
      name = event.target.name;
      value = event.target.value;

      setUser({...user, [name]:value});
  }

  const postData = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    
    const res = await fetch("/signin", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Login Failed");
      console.log("Failed Login");
    }
    else{
      window.alert("Login Successful");
      console.log("Successful Login");

      navigate("/home")
    }
}

  return (
    <div className='body'>
      <Form method = "POST">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name = "email"
        value = {user.email}
        onChange = {handleInputs}
        placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name = "password"
        value = {user.password}
        onChange = {handleInputs}
        placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick = {postData}>
        Login
      </Button>
    </Form>

    </div>
  );
}

export default Signin;