import React from 'react'
import './index.css'
import { Container, Row, Card } from 'react-bootstrap'
import mobileapp from '../../assets/photos/AdobeStock_639040710.jpeg'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <Link to='/consultation'>

    <Card id='mobileapp' style={{
        height: '300px',
        marginTop: '50px',
        marginBottom: '50px',
        background: '#94aac8',
        maxWidth: '90%',
        marginLeft: '10%'
    }}>
    <Card.Img src={mobileapp} 
    alt="Card image"
    className='card-img'
    style={{
        height: '500px',
        
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
         marginLeft: '5%'
      }}>Mobile App</Card.Title>
      <Card.Text style={{
        textAlign: 'center',
        fontFamily: 'Fjalla One, sans-serif',
         fontWeight: '400',
         fontSize: '20px',
         color: 'white',
         background: 'black',
         maxWidth: '50%',
         marginLeft: '5%'
      }}>
       end-to-end mobile app development, 
       from idea consultation to design, development, 
       and deployment. Whether you're building a fitness app, 
       social media platform, or something new, I create custom 
       apps with user-friendly designs, scalable performance, and 
       seamless functionality. I handle everything, including app 
       store submission and ongoing maintenance, ensuring your app 
       is ready to engage users and grow with your needs.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
</Link>

    
  )
}

export default index