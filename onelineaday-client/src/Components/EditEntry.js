import React from "react";
import axiosWithAuth  from '../utils/axiosWithAuth';
import {Form, Button, Grid, Header} from "semantic-ui-react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'


export const Underlined = styled.span`
	text-decoration: underline
`	

export const P = styled.p`
	margin: 1rem 0;
`

class EditEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      description: {
        text_entry: '',
      }
    };
  }
  
  handleChange = (e) => {
    this.setState({
      description: {
        ...this.state.description,
        [e.target.text_entry]: e.target.value
      }
    });
  };
  
  onSave = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put('/api/journal/posts/id', this.state.description)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/Dashboard');
    })
    .catch(error => console.log("Please try your entry again", error));
  };


  render() {
    return (
      <div>
        <NavBar />
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>Edit Or Delete Your Entry</Header>
                
              <Form size='large' onSubmit={this.register}>
                <Form.Input fluid type="text"   text_entry="text_entry" placeholder="One Line A Day" onChange={this.handleChange}  />
                <div className='Entry-Buttons'>
                  <Button color='teal' fluid size='large'>Save</Button>
                  <Button className="delete-btn" color='red'>Delete Entry</Button>
                </div>
              </Form>
            
              <P><strong>Back To Dashboard</strong></P>    
              <P><Link to="/dashboard"><Underlined>Return</Underlined></Link></P>
                
            </Grid.Column>
          </Grid>
      </div>

    );
  }
};

export default EditEntry;