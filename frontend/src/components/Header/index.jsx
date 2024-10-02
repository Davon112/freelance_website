import React from 'react'
import yeah from '../../assets/photos/studios (1).svg'
import { Button } from 'react-bootstrap';
import './index.css'
import team from '../../assets/photos/AdobeStock_373511095_Preview.jpeg'

const index = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: '',
      
        
      
      
      
    }}>

<a href="https://cal.com/davon-manuel/consultation" target='_blank'>
          <button className="btn btn-primary" type="button" style={
            {
              width: '500px',
              marginLeft: '34%',
              marginBottom: '5%',
              height: '100px',
              fontSize: '40px',
              marginTop: '5%'
            }
          }>
            Free 60 Minute Consultation
          </button>
          </a>
      
      {/* Title */}
      <p style={{
        
        
        
        color: 'black',
        width: '100%',
        textAlign: '',
        padding: '5px',
        marginTop: '2%',
        fontFamily: '"League Spartan", sans-serif',
          fontWeight: '200',
          lineHeight: '100px',
          wordSpacing: '0px',
          height: '300px'
          
      }}>
        <span style={{
            fontSize: '190px',
            background: '',
            textAlign: 'center',
         
          marginLeft: '2%'
          }
          }>
            
            Designing<br />
            <span style={{
              marginLeft: '2%',
              fontWeight: '700',
              
            }}>Tomorrow,</span>  <br /> 
            
            <span style={{
              marginLeft: '2%',
              
            }}>
            Today
              </span>
            </span>
            
        
        
          
        
        
          
          
          <br />
          
          
      </p>
      



     <div style={{
      backgroundImage: `url(${team})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      height: '600px',
      width: '65%',
      marginLeft: '35%'
     }}>
     
     </div>
      
      {/* Container for summary and image side by side */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',     // Elements side by side
        justifyContent: 'center',
        alignItems: '',
        
        width: '95%',
        padding: '',
      }}>
        
        {/* Summary section */}
        
        
        {/* Image section */}
        {/* <img className='savvystudios' src={yeah} alt="" style={{
          height: '0%',          // Adjust image size
          width: '40%',
          marginLeft: '0%',       // Space between text and image
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          marginTop: '0px',
          
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }} /> */}
      </div>
      
      {/* Optional Button (uncomment if needed) */}
      {/* <a href="https://cal.com/davon-manuel/consultation" target='_blank'>
        <Button className='custom-button'
          style={{
            background: 'white',
            border: '#FFDE59 solid 5px',
            color: 'black',
            height: '100px',
            width: '400px',
            fontSize: '40px',
            marginTop: '40px',
            boxShadow: '#FFDE59 1px 5px 10px',
            fontFamily: '"Fjalla One", sans-serif',
          fontWeight: '400',
          }}>
          Schedule Consultation
        </Button>
      </a> */}
     
    </div>
  )
}

export default index;
