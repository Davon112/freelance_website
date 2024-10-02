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
        maxWidth: '80%'
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
      }}>Tutor</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
  )
}

export default index