import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Subscriptioninvoices = () => {
  return (
   <>
   <div className='container'>

    <div className='mt-4'>
    <p style={{fontSize:'24px',color:'rgb(43, 77, 129)' ,fontWeight:'500'}}>
<span>My Account </span>
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
    </span>
    <span> Subscription & Invoices</span>
    </p>
    </div>
    <div>
    <div className='row mt-5'>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div style={{justifyContent:'left',display:'flex'}}>
    <h2 style={{color:'rgb(43, 77, 129)' ,fontWeight:'500'}}>Current Payment Mode
    </h2>
    </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type='text'  style={{width:'70%',height:'2.5rem',borderRadius:'10px',border:'1px solid rgb(201, 198, 198)'}}/>
   
   </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div>
   <Link to={''} style={{textDecoration:'none'}}><span style={{color:'rgb(43, 77, 129)',borderBottom:'1px solid rgb(43, 77, 129)' ,fontSize:'24px'}}>Change Payment Mode
   </span></Link>
    </div>
    </div>
    </div>
    <div className='row mt-5'>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div style={{justifyContent:'left',display:'flex'}}>
    <h2 style={{color:'rgb(43, 77, 129)' ,fontWeight:'500'}}>Current Payment Plan

    </h2>
    </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type='text'  style={{width:'70%',height:'2.5rem',borderRadius:'10px',border:'1px solid rgb(201, 198, 198)'}}/>
   
   </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div>
   <Link to={''} style={{textDecoration:'none'}}><span style={{color:'rgb(43, 77, 129)',borderBottom:'1px solid rgb(43, 77, 129)' ,fontSize:'24px'}}>Change Payment Plan

   </span></Link>
    </div>
    </div>
    </div>
    <div className='row mt-5'>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div style={{justifyContent:'left',display:'flex'}}>
    <h2 style={{color:'rgb(43, 77, 129)' ,fontWeight:'500'}}>Next Payment Date


    </h2>
    </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type='date'  style={{width:'70%',height:'2.5rem',borderRadius:'10px',border:'1px solid rgb(201, 198, 198)'}}/>
   
   </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div>
   <Link to={''} style={{textDecoration:'none'}}><span style={{color:'rgb(43, 77, 129)',borderBottom:'1px solid rgb(43, 77, 129)' ,fontSize:'24px'}}>Stop Auto Payment


   </span></Link>
    </div>
    </div>
    </div>
    <div className='row mt-5'>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div style={{justifyContent:'left',display:'flex'}}>
    <h2 style={{color:'rgb(43, 77, 129)' ,fontWeight:'500'}}>Last Payment Date



    </h2>
    </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type='date'  style={{width:'70%',height:'2.5rem',borderRadius:'10px',border:'1px solid rgb(201, 198, 198)'}}/>
   
   </div>
    </div>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div>
   <Link to={''} style={{textDecoration:'none'}}><span style={{color:'rgb(43, 77, 129)',borderBottom:'1px solid rgb(43, 77, 129)' ,fontSize:'24px'}}>Transaction History



   </span></Link>
    </div>
    </div>
    </div>
    </div>
    
    

    </div>
   </>
  )
}

export default Subscriptioninvoices