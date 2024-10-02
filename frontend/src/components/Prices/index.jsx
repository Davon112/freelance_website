import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import savvy from '../../assets/photos/F (3).png';
import { Container, Row, Col,  } from 'react-bootstrap';
import './index.css'


function Index() {
  return (
    <Container >
      <Row>
        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px' }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 borderRadius: '',
                 backgroundColor: 'white',
                 boxShadow: 'black 1px 10px 2px'
                 
                 
                 
      
                  
                
                }}>  $0</Card.Title>  */}
                

              <Card.Title id='' style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 
                 fontSize: '37px'}}>Consultation</Card.Title>
                 
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                
              }}>
                
                Free 60 minute zoom call to go over your goals
                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px' , borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px',}}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white'
                 
      
                  
                
                }}>  $100-$500</Card.Title>  */}
               
              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 fontStyle: 'normal',
                 fontSize: '37px'}}>1-3 Paged Website</Card.Title>
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px'
              }}>
                
                
                Blogs, Portfolios, Landing Page, Event or Conference Website

                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px',textShadow: '#94aac8 1px 4px 1px', }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white'
                 
      
                  
                
                }}>  $500-$5,000</Card.Title>  */}
               
              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 fontSize: '37px'}}>4+ Paged Websites</Card.Title>
              
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px'
              }}>
                
               
                E-Commerce, Nonprofit, Corporate, Educational,
                Health & Wellness
                
                 
               
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px' }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white'
                 
                 
                 
      
                  
                
                }}>  $1,000+</Card.Title>  */}
                

              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 
                 fontSize: '37px'}}>Mobile App</Card.Title>
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                
              }}>
                
                Mobile Apps Start at $1,000. Amount of features will determine price 
                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px' }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white',
                 
                 
                 
                 
      
                  
                
                }}>  $100</Card.Title>  */}
                

              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 
                 fontSize: '37px'}}>UI/UX Design</Card.Title>
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                
              }}>
                
                This only includes designs, nothing is coded out
                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px' }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white'
                 
                 
      
                  
                
                }}>  $70/hr</Card.Title>  */}
                

              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 
                 fontSize: '37px'}}>Code Consultant </Card.Title>
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                
              }}>
                
                Helping Startups debug their code and maximize efficiency
                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px' }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white'
                 
                 
                 
      
                  
                
                }}>  *free*</Card.Title>  */}
                

              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 
                 fontSize: '37px'}}>Bootcamp Tutor</Card.Title>
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                textShadow: '#94aac8 1px 3px 5px'
                
              }}>
                
                *4 free tutoring sessions per month
                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: '100%', marginTop: '40px', borderRadius: '30px', textShadow: '#94aac8 1px 4px 1px', }}>
           
            <Card.Body className='price-cards'>
              {/* <Card.Title style={{
                marginBottom: '10px',
                height: '65px',
                 textAlign: 'center',
                 fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 fontSize: '50px',
                 border: 'white 3px solid',
                 backgroundColor: 'white'
                 
      
                  
                
                }}>  $100-$250</Card.Title>  */}
                
              <Card.Title style={{
                height: '45px', 
                textAlign: 'center',
                fontFamily: 'Fjalla One, sans-serif',
                 fontWeight: '400',
                 fontStyle: 'normal',
                 borderBottom: 'white 2px solid',
                 textShadow: 'white 1px 2px 1px',
                 fontSize: '37px'}}>Logo Design</Card.Title>
                 
              
              <Card.Text style={{height: '95px', textAlign: 'center',
             fontFamily: 'Fjalla One, sans-serif',
             fontWeight: '400',
             fontStyle: 'normal',
             fontSize: '18px',
             

              }}>
                
                This includes multiple different design styles and svg, png, and png files 
                
              </Card.Text>
            </Card.Body>
            
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
