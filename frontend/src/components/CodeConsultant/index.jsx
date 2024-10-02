import React from 'react'
import './index.css'
import { Container, Row, Card } from 'react-bootstrap'
import cc from '../../assets/photos/AdobeStock_797248138.jpeg'
import { Link } from 'react-router-dom'


const index = () => {
  return (

  <Link to='/consultation'>

    <Card id='ux' style={{
        height: '500px',
        marginTop: '250px',
        marginBottom: '50px',
        background: '#94aac8',
        maxWidth: '90%',
        
    }}>
    <Card.Img src={cc}
     alt="Card image"
     className='card-img'
    style={{
        height: '100%',
        
        
        
    }} />
    <Card.ImgOverlay>
      <Card.Title style={{
        textAlign: 'center',
        fontFamily: 'Fjalla One, sans-serif',
         fontWeight: '400',
         fontSize: '50px',
         color: 'white',
         background: 'black',
         maxWidth: '50%',
         marginLeft: '45%'
      }}>Coding Consultant</Card.Title>
      <Card.Text style={{
        textAlign: 'center',
        fontFamily: 'Fjalla One, sans-serif',
         fontWeight: '400',
         fontSize: '20px',
         color: 'white',
         background: 'black',
         maxWidth: '50%',
         marginLeft: '45%'
      }}>
        
        As a consultant, I provide specialized support for 
        startups to enhance their software development processes. 
        I help teams select the best technology stacks that align 
        with their project goals and business needs. My services also 
        include collaborating with existing developers to debug issues 
        and optimize performance, ensuring efficient and scalable code. 
        Through hands-on guidance and strategic advice, I empower startups 
        to navigate technical challenges effectively, improve their product's 
        functionality, and ultimately achieve their business objectives.
      </Card.Text>
      
    </Card.ImgOverlay>
  </Card>
  </Link>

  )
}

export default index