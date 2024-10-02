import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';
import backbutton from '../assets/photos/back-button.svg'
import { Link } from 'react-router-dom';


import './Consultation.css'

const Consultation = () => {
  return (
<>

    <Link to='/services'>
    <img src={backbutton} style={{
        padding: '5px',
        height: '60px',
        
    }}>
    
    </img>
    </Link>

    <Card  style={{
        width: '50%',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px',
        padding: '20px',
        backgroundColor: ''
    }}>


      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '15px',
            
        }}
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Email"
      style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px'
    }}>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Service "
      style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px'
    }}>
      <Form.Select aria-label="Floating label select example">
        <option value="1">Website</option>
        <option value="2">Mobile App</option>
        <option value="3">Logo</option>
        <option value="4">UX/UI</option>
        <option value="5">Coding Consultant</option>
        <option value="6">Other</option>
      </Form.Select>
    </FloatingLabel>
    <FloatingLabel controlId="floatingSelect" label="I am"
    style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px'
    }}>
      <Form.Select aria-label="Floating label select example">
        <option>Seeking Information</option>
        <option value="1">100% Ready to Start</option>
        <option value="2">Motivated but not Financially Ready</option>
        <option value="3">Just Curious</option>
      </Form.Select>
    </FloatingLabel>

    <FloatingLabel controlId="floatingTextarea2" label="Comments"
    style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px'
    }}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      

      <Button style={{
        width: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>Submit

      </Button>
    </Card>
    </>
  )
}

export default Consultation