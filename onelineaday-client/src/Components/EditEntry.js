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
      entry: {
        text_entry: '',
        id: '',
        title: ''
      }
    };
  }
  
componentDidMount() {
        const entryId = this.props.match.params.entryId;
        axiosWithAuth()
          .get(`api/journal/posts/${entryId}`)
          .then(res => {
            this.setState({
              entry: {
                text_entry: res.data.text_entry,
                id: entryId,
                title: res.data.title
              }
            });
          })
          .catch(err => {
            console.log(err)
          });
      };

  handleChange = (e) => {
    this.setState({
      entry: {
        ...this.state.entry,
        text_entry: e.target.value
      }
    });
  };

  onSave = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/journal/posts/${this.state.entry.id}`, this.state.entry)
      .then(res => {
        this.props.history.push('/Dashboard');
      })
      .catch(error => console.log("Please try your entry again", error));
  };

  onDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/journal/posts/${this.state.entry.id}`, this.state.entry)
      .then(res => {
        this.props.history.push('/Dashboard');
      })
      .catch(error => console.log("Entry could not be deleted.", error));
  }


  render() {
    return (
      <div>
        <NavBar />
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>Edit Or Delete Your Entry</Header>
                
              <Form size='large' onSubmit={this.register}>
              <Form.Input fluid type="text" name='text_entry' value={this.state.entry.text_entry}
                          onChange={this.handleChange}/>
                <div className='Entry-Buttons'>
                <Button color='teal' fluid size='large' onClick={this.onSave}>Save</Button>
                <Button color='red' onClick={this.onDelete}>Delete Entry</Button>
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