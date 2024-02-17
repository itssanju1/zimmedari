


import React from 'react'
import imageuser from '../../assets/img/logouserimage.png'
import { Link } from 'react-router-dom';
// import imagelogo from '../../../../assets/img/logoformeri.png'
// import imageuser from '../../../../assets/img/logouserimage.png'
// import { Link } from "react-router-dom";
// import imageside from '../../../../assets/img/wp2864827.png'
// import {Container, NavLink} from 'reactstrap'
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Row,
//   Col,
// } from "reactstrap";

const Register = () => {
  return (
  <>
  <div className='container-fluid ' style={{display: "inline-block" ,marginTop:"-24px"}}>
  <div className='row'>
  <div className='col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4 mt-2'>
  {/* <img src={""} style={{width:"70%"}} alt='454'/> */}
  </div>
  <div className='col-md-8 col-sm-8 col-lg-8 col-xl-8 '>
  </div>
  <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4 ' style={{backgroundColor:"white"}}>
  </div>
  </div>
  <div className='row '>
  <div className='col-md-8 col-sm-8 col-lg-8 col-xl-8'>
  <div>
  <img src={imageuser} style={{width:"100%" }} alt='4'/>
  </div>
  </div>
  <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4' style={{backgroundColor:"white" }}>
  
  <div  style={{margin:"2rem"}}>
  <div className=' mt-2'>
  <h2>
  Welcome to Meri Zimmedari
  </h2>
  <p>
  To sign up, please enter details
  </p>
  
  </div>
  <div class="" style={{float:"left"}}>
  <form>
  <lable>Enter Name</lable>
  <div className="mb-1" style={{border:"1px solid grey" ,padding:"5px", paddingTop:"8px", paddingBottom:"8px", borderRadius:"5px"}}>
  
  <input style={{border:"none",outline: "none",width:'17rem' }} type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder="Name" required />

  </div>
  <lable >Enter DOB</lable>
  <div className="mb-1" style={{border:"1px solid grey" ,padding:"5px", paddingTop:"8px", paddingBottom:"8px", borderRadius:"5px"}}>
  
  <input style={{ border:"none",outline: "none" }} type="date" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder="Date of Birth" required />

  </div>
  <lable>Enter Email ID</lable>
  <div style={{border:"1px solid grey" ,padding:"5px", paddingTop:"8px", paddingBottom:"8px", borderRadius:"5px"}}>
  
  <input style={{ border:"none",outline: "none" }} type="email" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder="john@example.com" required />

  </div>
  <div className="mt-3">
  <button type="button" class="btn " style={{width:"100%", backgroundColor:"#4478c7" , color:"white"}}> Upload Live Pic
        
        </button>     
  </div>
  <div className="mt-2">
  <button type="button" class="btn " style={{width:"100%", backgroundColor:"#4478c7" , color:"white"}}> Submit</button>
                
  </div>
  <div className="mt-2">
  <span className="nav-link-inner--text" style={{color:"black"}}> Already Have Account 
  <Link to={'/login'}>
  <span style={{color:"rgb(57, 103, 204)"}}>Sign in</span>
  </Link>
  </span>
                
  </div>
  </form>
 

  </div>
</div>
  <div >

 
  </div>
  </div>
  </div>
  </div>
  

{/* //   iske uper edit */}
  
  </>
  )
}

export default Register;