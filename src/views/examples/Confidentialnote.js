import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Confidentialnote = () => {
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
    <span> Confidential Note</span>
    </p>
    </div>
    <div style={{ overflowX: 'auto' }}>
    <table class="table" >
  <thead>
    <tr style={{backgroundColor:'rgb(176, 193, 219)',width:'100%'}}>
      <th scope="col" style={{textTransform: "capitalize",fontSize:'18px',color:'rgb(43, 77, 129)',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Nominee Name
      </th>
      <th scope="col" style={{textTransform: "capitalize",fontSize:'18px',color:'rgb(43, 77, 129)',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Relation with <br></br> Nominee</th>
      <th scope="col" style={{textTransform: "capitalize",fontSize:'18px',color:'rgb(43, 77, 129)',width:'30%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Nominee Phone No.
      </th>
      <th scope="col" style={{textTransform: "capitalize",fontSize:'18px',color:'rgb(43, 77, 129)',width:'30%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Nominee e-mail ID
      </th>
      <th scope="col" style={{textTransform: "capitalize",fontSize:'18px',color:'rgb(43, 77, 129)',width:'10%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Action
      </th>
      
     
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="col" ><input className='inputetextcssforedit' type='text' style={{border:'1px solid rgb(201, 198, 198)',textAlign:'center',height:'2.5rem',width:'100%',borderRadius:'10px',fontSize:'18px'}}/>
     
    </th>
      <th scope="col" >
      
      <select class="form-select" aria-label="Default select example" style={{border:'1px solid rgb(201, 198, 198)',textAlign:'center',height:'2.5rem',width:'100%',borderRadius:'10px',fontSize:'18px'}}>
      <option selected></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
      </th>
      <th scope="col" >
     
      <div style={{border:'1px solid rgb(201, 198, 198)',height:'2.5rem',width:'100%',borderRadius:'10px',padding:'3px'}} >
      <span>
      <select class="form-select" aria-label="Default select example" style={{width:'25%',border:'1px solid rgb(201, 198, 198)',textAlign:'center',height:'2rem',borderRadius:'10px',fontSize:'18px'}}>
      <option selected>+91</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
      </span>
      <span>
      <input className='inputetextcssforedit' placeholder='XXXXXXXX' type='tel' style={{width:'50%',border:'1px solid rgb(201, 198, 198)',height:'2rem',borderRadius:'10px',fontSize:'18px'}}/>
     
      </span>
      <span >
      <button className='btn btn-primary'  style={{marginTop:'-5px',fontSize:'10px',width:'25%',height:'2rem',borderRadius:'10px', border:'1px solid rgb(201, 198, 198)',lineHeight:'10px'}}>
      SEND<br></br> OTP
      </button>
      </span>
      </div>
      </th>
      <th scope="col" >
      <div style={{border:'1px solid rgb(201, 198, 198)',height:'2.5rem',width:'100%',borderRadius:'10px',padding:'3px'}} >
      
      <span>
      <input className='inputetextcssforedit' placeholder='XXXXXXX@ymail.com' type='email' style={{width:'75%',border:'1px solid rgb(201, 198, 198)',height:'2rem',borderRadius:'10px',fontSize:'18px'}}/>
     
      </span>
      <span >
      <button className='btn btn-primary'  style={{marginTop:'-5px',fontSize:'10px',width:'25%',height:'2rem',borderRadius:'10px', border:'1px solid rgb(201, 198, 198)',lineHeight:'10px'}}>
      SEND<br></br> OTP
      </button>
      </span>
      </div>
      </th>
      <th scope="col" >
      <div style={{justifyContent:"center",display:'flex',border:'1px solid rgb(201, 198, 198)',height:'2.5rem',width:'100%',borderRadius:'10px',padding:'3px'}} >
      
      
      <span >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
      </span>
      </div>
      </th>
    </tr>
    
   
    
  </tbody>
</table>
</div>
<div style={{float:'right', bottom:'0px'}}>
<LinkContainer to={'/nomineedetailsedit'}>
<span className='btn'>
<svg xmlns="http://www.w3.org/2000/svg" color='rgb(43, 77, 129)' width="50" height="50" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>
</span>
</LinkContainer>
</div>
    </div>
    </>
  )
}

export default Confidentialnote