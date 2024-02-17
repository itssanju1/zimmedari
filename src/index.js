/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/style.css'
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";


import Mynavbar from "./components/Navbars/Mynavbar";
import Index from "views/Index";
import Icons from "views/examples/Icons";
import Assetpolicy from "views/examples/Assetpolicy";
import Assetstep2 from 'views/examples/Assetstep2'
import Assetstep3 from "views/examples/Assetstep3";
import Assetstep3confirm from "views/examples/Assetstep3confirm";
import LifeDeclaration from "views/examples/LifeDeclaration";
import MyProfile from "views/examples/MyProfile";
import Login from "views/examples/Login";
import Otpveri from "views/examples/Otpveri";
import Loginwithpassword from "views/examples/Loginwithpassword";
import Register from "views/examples/Register";
import Myprofileedit1 from "views/examples/Myprofileedit1";
import AssetDetails from "views/examples/AssetDetails";
import Nomineedetails from "views/examples/Nomineedetails";
import Nomineedetailsedit from "views/examples/Nomineedetailsedit";
import Confidentialnote from "views/examples/Confidentialnote";
import Subscriptioninvoices from "views/examples/Subscriptioninvoices";
import Manageaccount from "views/examples/Manageaccount";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
 <Mynavbar/>
  <Routes>
  <Route path="/manageaccount" element={<Manageaccount/>}/>
  <Route path="/Subscriptioninvoices" element={<Subscriptioninvoices/>}/>
  <Route path="/confidentialnote" element={<Confidentialnote/>}/>
  <Route path="/nomineedetailsedit" element={<Nomineedetailsedit/>}/>
  <Route path="/nomineedetails" element={<Nomineedetails/>}/>
  <Route path="/assetdetails" element={<AssetDetails/>}/>
  <Route path="/myprofile/edit" element={<Myprofileedit1/>}/>
  <Route path="/registration" element={<Register/>}/>
  <Route path="/login/password" element={<Loginwithpassword/>}/>
  <Route path="/login/otp" element={<Otpveri/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/myprofile" element={<MyProfile/>}/>
  <Route path="/lifedeclaration" element={<LifeDeclaration/>}/>
  <Route path="/add-asset/setp3/confirm" element={<Assetstep3confirm/>}/>
  <Route path="/add-asset/step3" element={<Assetstep3/>}/>
  <Route path="/add-asset/step2" element={<Assetstep2/>}/>
        <Route path="/add-asset/policy" element={<Assetpolicy/>}/>
       <Route path="/dashboard" element={<Index/>}/>
      <Route path="/add-asset" element={<Icons/>}/>
    </Routes>
  </BrowserRouter>
);
