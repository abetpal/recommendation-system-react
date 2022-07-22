
import './signup.css';
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


function Signup() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name:"", last_name:"", username:"", email:"", password:"", address:"", city:"", state:"", pincode:"", contact_number:""
  });

  let name, value;
  const handleInputs = (event) => {
      name = event.target.name;
      value = event.target.value;

      setUser({...user, [name]:value});
  }

  const postData = async (event) => {
      event.preventDefault();
      const { first_name, last_name, email, password, username, address, city, state, pincode, contact_number } = user;
      console.log(user);
      const res = await fetch("/signup", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          first_name, last_name, email, password, username, address, city, state, pincode, contact_number
        })
      });
      const data = await res.json();
      console.log(data);
      if(data.status === 422 || !data){
        window.alert("Registration Failed");
        // console.log("Failed Registration");
      }
      else{
        window.alert("Registration Successful");
        // console.log("Successful Registration");

        navigate("/signin")
      }
  }

  return (
    <div className ='body'>
      <div className='title'><h1>Recommendation System</h1></div>  
        <br></br> 
        <div className='form'>
        <Form method = "POST">
          
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name = "first_name" 
            value = {user.first_name}
            onChange = {handleInputs}
            placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name = "last_name"
            value = {user.last_name}
            onChange = {handleInputs}
            placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" name = "username"
            value = {user.username}
            onChange = {handleInputs}
            placeholder="Enter username" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name = "email"
            value = {user.email}
            onChange = {handleInputs}
            placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row classname="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name = "password"
            value = {user.password}
            onChange = {handleInputs}
            placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridConfirmPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control type="password" name = "confirmPassword"
            // value = {user.confirmPassword}
            // onChange = {handleInputs}
            placeholder="Confirm Password" />
          </Form.Group>
          </Row>


        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name = "address"
          value = {user.address}
          onChange = {handleInputs}
          placeholder="1234 Main St" />
        </Form.Group>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name = "city"
            value = {user.city}
            onChange = {handleInputs}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control name = "state"
            value = {user.state}
            onChange = {handleInputs}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name = "pincode"
            value = {user.pincode}
            onChange = {handleInputs}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name = "contact_number"
          value = {user.contact_number}
          onChange = {handleInputs}
          placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check to confirm" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick = {postData}>
          Submit
        </Button>
      </Form>
          </div>   

    </div>
  );
}

export default Signup;