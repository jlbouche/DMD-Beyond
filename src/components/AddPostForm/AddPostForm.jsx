import React, { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddFoodPic(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    postTitle: '',
    caption: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('postTitle', state.postTitle)
    formData.append('caption', state.caption)
    props.handleAddPost(formData)
    setState({
        postTitle: '',
        caption: ''
    })
  }


  return (
    
  
        <Segment style={{height: 250, width: 350}} class="ui container center aligned">
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
            <Form.Input
                  className="form-control"
                  name="postTitle"
                  value={state.postTitle}
                  placeholder="Where did you eat?"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={state.caption}
                  placeholder="Write about your experience!"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                color="red"
                type="submit"
                className="btn"
              >
                ADD POST
              </Button>
            </Form>
          </Segment>
     
   
  ); 
}

