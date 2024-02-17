import React from 'react'
import { Link } from 'react-router-dom'

const LifeDeclaration = () => {
  return (
    <>
   <div className='container mt-5'>
   <div className='row' style={{border:'1px solid  rgb(201, 198, 198)',padding:'20px', borderRadius:'15px'}}>
   <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6'>
   <span>
   <p className='text-center' style={{color:'rgb(82, 114, 161)', fontSize:'20px'}}>
   
  <span>
  Select Monthly Life Declaration Day
  </span>
  <span className='ml-3 '>
   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
   </span>
   </p>
   </span>
   
   </div>
   <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type="date" id="dateInput" class="form-control" style={{width:'60%',height:'3.5rem', borderRadius:'15px'}}></input>
   </div>
   </div>

   </div>
   <div className='row mt-3' style={{border:'1px solid  rgb(201, 198, 198)',padding:'20px', borderRadius:'15px'}}>
   <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6'>
   <div>
   <p className='text-center' style={{color:'rgb(82, 114, 161)', fontSize:'20px'}}>
   
  <span>
  Last Life Declaration Submitted on

  </span>
  
   </p>
   </div>
   
   </div>
   <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type="text" id="dateInput" class="form-control" style={{width:'60%', height:'3.5rem', borderRadius:'15px'}}></input>
   </div>
   </div>
   <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6 mt-3'>
   <div>
   <p className='text-center' style={{color:'rgb(82, 114, 161)', fontSize:'20px'}}>
   
  <span>
  Last Life Declaration Submitted on

  </span>
  
   </p>
   </div>
   
   </div>
   <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6 mt-3'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <input type="text" id="dateInput" class="form-control" style={{width:'60%', height:'3.5rem', borderRadius:'15px'}}></input>
   </div>
   </div>

   </div>
   <div className='container mt-5' >
  <div style={{float:'left'}}>
  <Link to={'/add-asset'}>
  <p style={{color:'rgb(82, 114, 161)', fontSize:'20px', fontWeight:'500'}}>
  <span>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
  </span>
  <span className='ml-3'>
  BACK
  </span>
  </p>
  </Link>
  </div>
  <div style={{float:'right'}}>
  <Link to={'/add-asset/step2'}>
  <button style={{border:'none', backgroundColor:'rgb(182, 205, 236)' , padding:'8px', paddingRight:'15px', paddingLeft:'15px', borderRadius:'5px'}}>
  SUBMIT LIFE DECLERATION NOW

  </button>
  </Link>
  </div>
  </div>
   </div>
    </>
  )
}

export default LifeDeclaration