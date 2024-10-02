import React from 'react'
import './index.css'
import { Container, Row, Card } from 'react-bootstrap'
import ux from '../../assets/photos/AdobeStock_567642900.jpeg'
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
    <Card.Img src={ux}
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
      }}>UX/UI Design</Card.Title>
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
        
        I provide professional UX/UI design services for websites and mobile apps, focusing on creating visually stunning and highly functional user experiences. My services include everything from wireframes to polished high-fidelity designs, ensuring a seamless and intuitive interface that aligns with your brand and user needs.
      </Card.Text>
      
    </Card.ImgOverlay>
  </Card>
</Link>

    
  )
}

export default index