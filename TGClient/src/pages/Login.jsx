import React, { useState, useEffect } from "react";
import "../styles/NewLogin.css";
import "font-awesome/css/font-awesome.min.css";
import Loginform from "./Loginform";
import logo from '../assets/images/logomed.png'
const Login = () => {
  return (
    <div>
      {/* {showComponent && <Spinner/>}
      {!showComponent && */}
      <section className="background-radial-gradient overflow-hidden" style={{paddingBottom:0}}>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="row gx-lg-5 align-items-center mb-5">
            <Loginform/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;