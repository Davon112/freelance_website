import React from 'react'
import './index.css'
import { Container, Row, Card } from 'react-bootstrap'
import lgdesign from '../../assets/photos/AdobeStock_967039537.jpeg'
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
    <Card.Img src={lgdesign} 
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
      }}>Logo Design</Card.Title>
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
    professional logo design service that 
       focuses on creating unique and memorable brand 
       identities. The process includes understanding 
       your brand's vision and values to craft a logo 
       that resonates with your target audience. You can
        expect multiple design concepts and revisions to 
        ensure the final product aligns perfectly with your
         brand's image. Deliverables include high-resolution 
         files in various formats (SVG, PNG, etc.), making it 
         easy for you to use your logo across different platforms and media.
      </Card.Text>
     
    </Card.ImgOverlay>
  </Card>
    </Link>
  )
}

export default index