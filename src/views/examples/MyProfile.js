import React from 'react'
import profile from '../../assets/img/myprofilepic.png'
import { Link } from 'react-router-dom'

const MyProfile = () => {
  return (
    <div className='container'>
   <div className='row mb-5'>
   <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
   <div>
   <img src={profile} alt='profile'/>
   </div>
   </div>
   <div className='col-md-8 col-sm-8 col-lg-8 col-xl-8 mt-4'>
   <div>
   <form>
   <div className="form-row">
     <div className="form-group col-md-4">
       <label for="firstName">First Name</label>
       <input type="text" className="form-control" id="firstName" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px'}} placeholder="" required/>
     </div>
     <div className="form-group col-md-4">
       <label for="middleName">Middle Name</label>
       <input type="text" className="form-control" id="middleName" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px'}} placeholder=""/>
     </div>
     <div className="form-group col-md-4">
       <label for="lastName">Last Name</label>
       <input type="text" className="form-control" id="lastName" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px'}} placeholder="" required/>
     </div>
   </div>
   <div className="form-row">
     <div className="form-group col-md-6">
       <label for="phone">Phone Number</label>
       <span>
       <input type="tel" className="form-control" id="phone" placeholder="" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px',width:'70%'}} required/>
       
       </span>sdhg
       
       </div>
     <div className="form-group col-md-6">
       <label for="email">Email Address</label>
       <input type="email" className="form-control" id="email" placeholder="" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px'}} required/>
     </div>
     <div className="form-group col-md-6">
     <label for="email">Date of Birth
     </label>
     <input type="date" className="form-control" id="email" placeholder="" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px'}} required/>
   </div>
   </div>
  
 </form>
   </div>
   </div>
   </div>
   <div  style={{float:'right'}}>
   <Link to={'/myprofile/edit'}>
   <span>
 <svg xmlns="http://www.w3.org/2000/svg" color='rgb(43, 77, 129)' width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
 </span>
 </Link>
   </div>
   </div>
  )
}

export default MyProfile