
import { Table } from 'reactstrap';

import { Link } from "react-router-dom";
const Icons = () => {
  
  
  return (
    <>
     
      {/* Page content */}
    <div className="container">
      <div style={{justifyContent:'center' , display:'flex', paddingBottom:'50px' }}>
      <input type="search" placeholder="Search...." style={{width:"60%", borderRadius:'20px' , height:'3rem', paddingLeft:'30px'}}/>
      </div>
      <div style={{ overflowX: 'auto' }}>
      <Table>
      <thead>
        <tr style={{backgroundColor:"rgb(182, 204, 230)"}}>
          <th className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"50%",borderRight:'2px solid white'}}>Asset Type</th>
          <th className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"30%",borderRight:'2px solid white'}}>Number of Asset Added</th>
          <th className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"20%",borderRight:'2px solid white'}}>Action</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"50%"}}>Term Insurance Policy</th>
          <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"30%"}}>2 Added</td>
          <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"20%"}}>
          <span >
       
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </svg>
         
          </span>
          <span style={{marginLeft:'5px'}}>
       <Link to={'/add-asset/policy'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
  </svg>
  </Link>
          </span></td>
        </tr>
        <tr>
          <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"50%"}}>Life Insurance Policy</th>
          <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"30%"}}>0 Added</td>
          <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"20%"}}>
          <span >
        
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </svg>
         
          </span>
          <span style={{marginLeft:'5px'}}>
          <Link to={'/add-asset/policy'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
  </svg>
  </Link>
          </span></td> 
        </tr>
        <tr>
          <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"50%"}}>Saving Bank Account</th>
          <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"30%"}}>0 Added</td>
          <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"20%"}}>
          <span >
        
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </svg>
         
          </span>
          <span style={{marginLeft:'5px'}}>
          <Link to={'/add-asset/policy'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
  </svg>
  </Link>
          </span></td>
        </tr>
        <tr>
        <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"50%"}}>Pradhan Mantri Suraksha Bima Yojna(PMSBY)</th>
        <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"30%"}}>1 Added</td>
        <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"20%"}}>
        <span >
 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
      
        </span>
        <span style={{marginLeft:'5px'}}>
        <Link to={'/add-asset/policy'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
</Link>
        </span></td>
      </tr>
      </tbody>
    </Table>
    </div>
   
    </div>
    </>
  );
};

export default Icons;
