
import React from "react";
import axiosWithAuth  from '../utils/axiosWithAuth';
import {Form, Button, Grid, Header} from "semantic-ui-react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Underlined = styled.span`
	text-decoration: underline
`	

export const P = styled.p`
	margin: 1rem 0;
`

class RegForm extends React.Component {
    state = {
      credentials: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    };
  
    handleChange = (e) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
      register = (e) => {
        e.preventDefault();
        axiosWithAuth()
          .post('/api/auth/register', this.state.credentials)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/Dashboard');
          })
          .catch(error => console.log(error));
      };
    

  render() {
    return (
        <div>
 <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
 <Grid.Column style={{ maxWidth: 450 }}>
 <Header as='h2' color='teal' textAlign='center'>
     Create an Account
     </Header>
        <Form size='large' onSubmit={this.register}>
        <Form.Input fluid type="text" name="first_name" placeholder="First Name" onChange={this.handleChange}  />
        <Form.Input fluid type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange}  />
         <Form.Input fluid type="email" name="email" placeholder="Email" onChange={this.handleChange}  />
         <Form.Input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
         <Button color='teal' fluid size='large'>Submit</Button>
        </Form>
        <P>
  				<strong>Already a member?</strong> <Link to="/"><Underlined>Login</Underlined></Link>
  			</P>
        </Grid.Column>
  </Grid>
        </div>

        );
  }
};


export default RegForm;