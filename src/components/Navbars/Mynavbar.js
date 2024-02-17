import React from 'react'
import imagelogo from '../../assets/img/brand/argon-react.png'
import '../../assets/css/style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap';
const Mynavbar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg"  >
    <Container fluid>
      <Navbar.Brand href="#home">
      <img src={imagelogo}  width={"100px"} alt='12'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav " >
        <Nav className="me-auto ">
          
          <LinkContainer to={'/dashboard'}>
          <Nav.Link className='cssfornavbarpadding'>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/add-asset'}>
          <Nav.Link className='cssfornavbarpadding'>Add Asset</Nav.Link>
          </LinkContainer>
         
          <LinkContainer to={'/lifedeclaration'}>
          <Nav.Link className='cssfornavbarpadding'>Life Declaration</Nav.Link>
          </LinkContainer>

          <LinkContainer to={'/myprofile'}> 
          <Nav.Link className='cssfornavbarpadding'>My Profile</Nav.Link>
          </LinkContainer>
          
          <NavDropdown  className='cssfornavbarpadding dropdown-toggle1' title="My Account" id="basic-nav-dropdown">
             <LinkContainer to={'/assetdetails'}>
          <NavDropdown.Item style={{color:'black',backgroundColor:'white'}}>Asset Details</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={'/nomineedetails'}>
          <NavDropdown.Item >Nominee Details
          </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={'/confidentialnote'}>
          <NavDropdown.Item >Confidential Note
          </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={''}>
          <NavDropdown.Item >Preview
          </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={'/Subscriptioninvoices'}>
          <NavDropdown.Item >Subscription & invoices
          </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to={'/manageaccount'}>
          <NavDropdown.Item >Manage Account
          </NavDropdown.Item>
          </LinkContainer>
          
        
            </NavDropdown>
         
          <Nav.Link href="#pricing" className='cssfornavbarpadding'>Help</Nav.Link>
          <Nav.Link href="#features" className='cssfornavbarpadding'>FAQ</Nav.Link>
          <LinkContainer to={'/login'}> 
          <Nav.Link className='cssfornavbarpadding'>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/registration'}> 
          <Nav.Link className='cssfornavbarpadding'>Register</Nav.Link>
          </LinkContainer>
          
          
         
          
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>

   
    </>
  )
}

export default Mynavbar