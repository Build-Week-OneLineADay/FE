import React, { useState } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth'
import {Form, Button, Grid, Header} from "semantic-ui-react";


export const Underlined = styled.span`
	text-decoration: underline
`	

export const P = styled.p`
	margin: 1rem 0;
`

export default function Login(props) {
  const [auth, setAuth] = useState({email:'', password:''});

  const handleChanges = e => {
    setAuth({
      ...auth,
      [e.target.name] : e.target.value
    })
  };
	
    const onSubmit = e => {
      e.preventDefault()
      axiosWithAuth()
      .post('/api/auth/login', auth)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user.id);
        props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
    };
    
	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }}>
			  <Header as='h2' color='teal' textAlign='center'>Login</Header>
  			<Form onSubmit={onSubmit}>
  				<Form.Input
            name="email" 

            type="email"
            placeholder="Email"
            value={auth.email}
            onChange={handleChanges} 
          />

  				
  				<Form.Input
            name="password" 

            type="password"
            placeholder="Password"
            value={auth.password}
            onChange={handleChanges} 
          />

  				<Button color='teal' fluid size='large' type="submit">Login</Button>
  			</Form>
  
  			<P>
  				<strong>Not A Member?</strong> <Link to="/register"><Underlined>Sign Up.</Underlined></Link>
  			</P>
			</Grid.Column>
		</Grid>
	)
}

