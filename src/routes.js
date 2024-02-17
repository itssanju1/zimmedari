
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
   
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/addasset",
    name: "Add Asset",
   
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/lifedeclaration",
    name: "Life Declaration",
    
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/myprofile",
    name: "My Profile",
   
    component: <Profile />,
    layout: "/admin",
  },
  
  {
    path: "/myaccount",
    name: "My Account",
    
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/faq",
    name: "FAQ",
    
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
   
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    
    component: <Register />,
    layout: "/auth",
  },
  // {
  //   path: "/otp",
     
  
  //   component: <Otpveri />,
  //   layout: "/Login",
  // },
  // {
  //   path: "/Password",
   
   
  //   component: <Loginwithpassword />,
  //   layout: "/auth",
  // },
  
];
export default routes;
