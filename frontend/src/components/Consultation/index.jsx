import React from 'react'
import './index.css'
import { Container, Row, Card } from 'react-bootstrap'
import logo from '../../assets/photos/F (5).jpg'


const index = () => {
  return (
    <Card className=" text-black" style={{
        height: '300px', 
        marginTop: '250px',
        marginBottom: '50px',
        background: '#94aac8',
        maxWidth: '80%',
        
    }}>
    {/* <Card.Img src={logo} alt="Card image"
    style={{
        height: '500px'
    }} /> */}
    <Card.ImgOverlay>
      <Card.Title style={{
        textAlign: 'center',
        fontFamily: 'Fjalla One, sans-serif',
         fontWeight: '400',
         fontSize: '50px'
      }}>Consultaion</Card.Title>
      <Card.Text>
      During this session, we’ll discuss your goals, explore your project needs, and identify the best solutions to bring your vision to life. Whether you're looking for a custom website, mobile app development, or other tech services, this consultation helps us understand your objectives and how we can collaborate to meet them. It's a no-obligation opportunity to plan and strategize your project with expert guidance.
      </Card.Text>
      
    </Card.ImgOverlay>
  </Card>
  )
}

export default index