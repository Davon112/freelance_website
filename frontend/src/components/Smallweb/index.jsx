import React from 'react'
import './index.css'
import { Container, Row, Card } from 'react-bootstrap'
import coding from '../../assets/photos/AdobeStock_778284047.jpeg'



const index = () => {
  return (


    <Card id='smallweb' style={{
        height: '500px',
        marginTop: '50px',
        marginBottom: '50px',
        background: '#94aac8',
        maxWidth: '90%',
        marginLeft: '0%'
    }}>
    {/* <Card.Img src={coding} 
    alt="Card image"
    className='card-img'
    style={{
        height: '100%'
    }} /> */}
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
      }}>Websites</Card.Title>
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
        
For small websites, I offer streamlined solutions for 1-3 page designs, 
ideal for blogs, portfolios, landing pages, or event sites. These websites 
are perfect for clients who need a clean, functional web presence with a 
quick turnaround.

For larger websites (4+ pages), I build comprehensive platforms that cater
 to more complex needs such as e-commerce, corporate sites, nonprofits, 
 educational platforms, or health & wellness sites. These projects include 
 multiple pages and features, tailored to support businesses with more extensive 
 content and user engagement requirements.
      </Card.Text>
      
    </Card.ImgOverlay>
  </Card>



  )
}

export default index