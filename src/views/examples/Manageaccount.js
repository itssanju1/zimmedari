import React from 'react'

const Manageaccount = () => {
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
    <span> Manage Account</span>
    </p>
    </div>

    <div className='mt-5'>
    <div className='row' style={{border:'1px solid rgb(201, 198, 198)',padding:'40px',borderRadius:'30px'}}>
    <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
    <div>
    <button type="button" className="btn mt-3" style={{padding:'15px',border:'1px solid solid rgb(201, 198, 198)', backgroundColor:'rgb(230, 217, 219)',borderRadius:'15px'}}>Delete Account
    </button>
    </div>
    </div>
    <div className='col-md-8 col-sm-8 col-lg-8 col-xl-8'>
    <p style={{fontSize:'18px'}}>
    By deleting the account all information stored at the portal will get deleted permanently and will not be recovered again subscription fee will not be transferred back to user and portal will not be liable to provide any service to the user and nominee.

    </p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Manageaccount