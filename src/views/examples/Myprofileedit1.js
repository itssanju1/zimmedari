import React from 'react'
import profile from '../../assets/img/myprofilepic.png'
import { Link } from 'react-router-dom'

const Myprofileedit1 = () => {
  return (
   <>
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
     <div className="form-group col-md-5 col-sm-5 col-xl-5 col-lg-5 col-10">
    
       <label for="phone">Phone Number</label>
       <div>
       <span>
       <input type="tel" className="form-control" id="phone" placeholder="" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px',}} required/>
       
       </span>
       
       </div>
       
       
       </div>
       <div className="form-group col-md-1 col-sm-1 col-xl-1 col-lg-1 col-2" >
       <label for="phone" style={{color:'white'}}>.</label>
       <button style={{border:'1px solid  rgb(201, 198, 198)',fontSize:'14px',color:'white',height:'3rem',borderRadius:'10px',backgroundColor:'rgb(20, 130, 233)'}}>SEND OTP</button>
       </div>
     <div className="form-group col-md-5 col-sm-5 col-xl-5 col-lg-5 col-10">
       <label for="email">Email Address</label>
       <input type="email" className="form-control" id="email" placeholder="" style={{border:'1px solid  rgb(201, 198, 198)',height:'3rem',borderRadius:'10px'}} required/>
     </div>
     <div className="form-group col-md-1 col-sm-1 col-xl-1 col-lg-1 col-2" >
       <label for="phone" style={{color:'white'}}>.</label>
       <button style={{border:'1px solid  rgb(201, 198, 198)',fontSize:'14px',color:'white',height:'3rem',borderRadius:'10px',backgroundColor:'rgb(20, 130, 233)'}}>SEND OTP</button>
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
   <svg xmlns="http://www.w3.org/2000/svg" color='rgb(43, 77, 129)' width="40" height="40" fill="currentColor" class="bi bi-floppy2-fill" viewBox="0 0 16 16">
  <path d="M12 2h-2v3h2z"/>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"/>
</svg>

 </span><br></br>
 <span>
 SAVE
 </span>
 </Link>
   </div>
   </div>
   </>
  )
}

export default Myprofileedit1