
import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Form, Button} from "semantic-ui-react";



class RegForm extends React.Component {
    state = {
      credentials: {
        email: '',
        password: '',
        confirmpassword: ''
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
        <h1>Create an Account </h1>
        <Form onSubmit={this.register}>
         <input type="email" name="email" placeholder="Email" />
         <input type="password" name="passwordcreate" placeholder="Password" />
         <input type="password" name="confirmpassword" placeholder="Confirm Password" />
        <Button>Submit</Button>
        </Form>
        </div>
        
        );
  }
};


export default RegForm;