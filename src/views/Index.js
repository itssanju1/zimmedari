
// node.js library that concatenates classes (strings)

import { Link } from "react-router-dom";

// javascipt plugin for creating charts

// react plugin used to create charts


// reactstrap components


// core components




const Index = () => {
 

  return (
    <>
   
      {/* Page content */}
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4">
      

      <div style={{height:"20rem",borderRadius:"50%" , background: "linear-gradient(to top, rgb(233, 217, 214) 50%, rgb(224, 171, 162) 50%"}}>
     <br></br><br></br>
      <p className="text-center" style={{fontFamily: "Times New Roman", fontSize:"60px" , color:"white"}}>
      1
      </p><br></br>
      <div className="text-center" style={{lineHeight:"30px"}}>
      <span className="text-center" style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      5 ASSET 
     
      </span><br></br>
      <span  style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      ADDED
      </span>
      </div>
      
      </div>
      <div className="text-center mt-3 mb-4" style={{fontSize:"30px" , fontFamily: "Times New Roman",color:"rgb(48, 56, 126)", lineHeight:"30px"}}>
     <Link to={'/add-asset'}>
      <span>
      ADD ASSET 
      </span><br></br>
      <span>
      & NOMINEE

      </span>
      </Link>
      </div>
      </div>
     
      <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4">
      <div style={{height:"20rem",borderRadius:"50%" , background: "linear-gradient(to top, rgb(167, 188, 226) 50%, rgb(99, 147, 236) 50%"}}>
     <br></br><br></br>
      <p className="text-center" style={{fontFamily: "Times New Roman", fontSize:"60px" , color:"white"}}>
      2
      </p>
      <div className="text-center" style={{lineHeight:"30px"}}>
      <span className="text-center" style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      15th DAY OF  
     
      </span><br></br>
      <span  style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      EVERY 
      </span>
      <br></br>
      <span  style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      MONTH 
      </span>
      </div>
      
      </div>
      <div className="text-center mt-3 mb-4" style={{fontSize:"30px" , fontFamily: "Times New Roman",color:"rgb(48, 56, 126)", lineHeight:"30px"}}>
      <span>
      SET LIFE DECLERATION  
      </span><br></br>
      <span>
      DUE DATE

      </span>
      </div>
      </div>
      <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4">
      <div style={{height:"20rem",borderRadius:"50%" , background: "linear-gradient(to top, rgb(188, 218, 171) 50%, rgb(128, 187, 94) 50%"}}>
     <br></br><br></br>
      <p className="text-center" style={{fontFamily: "Times New Roman", fontSize:"60px" , color:"white"}}>
      3
      </p>
      <div className="text-center" style={{lineHeight:"30px"}}>
      <span className="text-center" style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      SUBSCRIPION 
     
      </span><br></br>
      <span  style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      VALID TILL  
      </span>
      <br></br>
      <span  style={{fontFamily: "Times New Roman", fontSize:"40px" , color:"rgb(48, 56, 126)"}}>
      15-DEC-2023
 
      </span>
      </div>
      
      </div>
      <div className="text-center mt-3 mb-4" style={{fontSize:"30px" , fontFamily: "Times New Roman",color:"rgb(48, 56, 126)", lineHeight:"30px"}}>
      <span>
      SUBSCRIPTION  
      </span><br></br>
      <span>
      STATUS

      </span>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Index;
