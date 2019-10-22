
import React, { useState } from "react";
import {Form, Button, Grid, Header} from "semantic-ui-react";

import "./Login.css";


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
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
     Get Logged In
        </Header>
      <form onSubmit={handleSubmit}>
        <Form controlId="email" bsSize="large">

          <h2>Email</h2>

          <Form
            autoFocus
            type="email"
            placeholder="Enter Your Email Here"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form>
        <Form controlId="password" bsSize="large">

          <h2>Password</h2>

          <Form
            value={password}
            placeholder="Enter Your Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form>

        <Button color="teal" block bsSize="large" disabled={!validateForm()} type="submit">

          Login
        </Button>
      </form>
      </Grid.Column>
    </Grid>
    </div>
  );
}
