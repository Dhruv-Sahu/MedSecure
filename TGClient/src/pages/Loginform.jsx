import React, { useState, useContext } from "react";
import log from '../assets/images/log.svg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Buyerlogin from "./Buyerlogin";
import "../styles/NewLogin.css";
import logo from "../assets/images/logomed.png";

import "font-awesome/css/font-awesome.min.css";

import axios from "../context/axios";
import { AuthContext } from "../context/authContext";
import Userlogin from "./Sellerlogin";

const Loginform = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

  async function handleSubmit(e){
    e.preventDefault()
    let data = {
      email,
      password
    }
    try {
      const response = await axios.post("/auth/login",
      data)
      console.log(response.data)
      if(response.data){
        userLogin(response.data)
      }

      navigate("/")
    } catch (error) {
      
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={log} id='image'></img>     
      <div>
        <img
          src={logo}
          alt="Medsecure Logo"
          style={{
            position: "relative",
            right: "-277px",top: "-34px",height: "77px",width:"90px"
          }}
        />
        <div
          classname="MedName"
          style={{
            fontSize: "50px",  backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",fontWeight: "700",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
    MarginLeft: "7px",
    display: "inline-block",
            position: "relative",
            right: "-387px",
            top: "-110px",
          }}
        >
          MedSecure
        </div>
      </div>
      <div
        className="col-lg-6 mb-5 mb-lg-0 position-relative"
        style={{ right: "17px" }}
      >
        <div
          className="card bg-glass"
          style={{ bottom: "-59px", width: "450px" }}
        >
          <div className="card-body px-4 py-5 px-md-5 boxes">
          <div
          classname="MedName"
          style={{
            fontSize: "50px",  backgroundImage: "linear-gradient(90deg, #2666BA, #00337C)",fontWeight: "700",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
    MarginLeft: "7px",
    display: "inline-block",
            position: "relative",
            right: "-109px",
            top: "-25px",
          }}
        >
          Login
        </div>
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                  placeholder="Email Address"
                  style={{height:"50px"}}
                  required
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control"
                  placeholder="Password"
                  style={{height:"50px"}}
                  required
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <div
                   >
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Boat"
                    />
                    <label htmlFor="vehicle3">Remember Me</label>
                  </div>
                    </div>
                    
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline" style={{ textAlign: "right" }}>
                    <Link to="#">Forget Your Password?</Link>
                  </div>
                </div>
              </div>
              {/* <!-- Submit button --> */}
              <div className="styler">
                <button
                  type="button"
                  className="btn btn-primary btn-block mb-4 button_styler"
                  onClick={(e)=>{
                    handleSubmit(e)
                  }}
                >
                  Login up
                </button>
              </div>
              {/* <!-- signup button --> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="nav__right d-flex align-items-center gap-5">
                  <button
                    className="btn d-flex gap-2 align-items-center"
                    onClick={() => navigate("/Signup")}
                  >
                    <p
                      style={{
                        marginBottom: 0,
                        color: "#ad3232",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      New User? SignUp
                    </p>
                  </button>
                </div>
              </div>
              {/* <!-- Register buttons --> */}
              {/* <div className="text-center">
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fa fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fa fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fa fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fa fa-github"></i>
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;