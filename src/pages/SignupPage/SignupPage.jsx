import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import './SignupPage.css';


export default function SignUpPage(props){
  const [invalidForm, setValidForm] = useState(false)
  const [error, setError ] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState]  = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  });

  const history = useHistory()
  
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){

    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile);


    for (let key in state){
      formData.append(key, state[key])
    }

    try {
      // refere to the utils/userService, to look at the signup fetch function
      await userService.signup(formData);
      // setTheUser in our app
      props.handleSignUpOrLogin() // gets the token from localstorage and updates the user state in our app.js
      // with the correct user object from the current token
      // then route to the homepage
      history.push('/') // defined above from react-router-dom
      // after this we can go whereever

    } catch(err){
      console.log(err.message)
      setError(err.message)
    }

  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }
 
    
    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column col={3} style={{ maxWidth: 450 }}>
              <Header as='h2' color='red' textAlign='center'>
                <Image src='https://i.imgur.com/FMpEgJi.png' /><span class="signuptext">Signup</span>  
                <Image src='https://media2.giphy.com/media/KfxPgR9Xb6lRvlFa8x/source.gif' style={{height: 100, width: 150}} floated='right'/>
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>               
                    <Form.Input                    
                      name="username"
                      placeholder="username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="email"
                      value={ state.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="password"
                      type="password"
                      placeholder="password"
                      value={ state.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={ state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Form.TextArea label='bio' placeholder='Tell us more about yourself!' name="bio" onChange={handleChange}/>
                    <Form.Field> 
                        <Form.Input
                          type="file"
                          name="photo"
                          placeholder="upload image"
                          onChange={handleFileInput}
                        />      
                    </Form.Field>
                    <Button
                      color="red"
                      fluid size='large'
                      type="submit"
                      className="btn"
                      disabled={invalidForm}
                    >
                    <span class="signuptext">Signup</span>
                  </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );       
}
