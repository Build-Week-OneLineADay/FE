import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {Form, Button} from "semantic-ui-react";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <Form controlId="email" bsSize="large">
          {/* <ControlLabel>Email</ControlLabel> */}
          <Form
            autoFocus
            type="email"
            placeholder="Enter Your Email Here"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form>
        <Form controlId="password" bsSize="large">
          {/* <ControlLabel>Password</ControlLabel> */}
          <Form
            value={password}
            placeholder="Enter Your Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}