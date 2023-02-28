import React, { useState, useContext } from "react";
import "../styles/NewLogin.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../components/Header/header.css";
import "font-awesome/css/font-awesome.min.css";

import { AuthContext } from "../context/authContext";
import axios from "../context/axios";
import { ethers } from "ethers";

const Buyerlogin = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [organisation, setorganisation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = () => {
    var password = document.getElementById("form3Example4"),
      confirm_password = document.getElementById("form3Example5");
    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
      setPassword("");
    } else {
      confirm_password.setCustomValidity("");
      setPassword(password.value);
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
  };

  async function signRegister() {
    try {
      if (!window.ethereum) {
        alert("No Crypto Wallet Found");
        return false;
        throw new Error("No Crypto Wallet Found");
      } else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const address = signer.getAddress();
        const signature = await signer.signMessage(
          "I Am Authorizing the Account"
        );

        console.log({
          signer,
          address,
          signature,
        });
        return true;
      }
    } catch (error) {
      return false;
    }
  }

  async function handleSubmit(e) {
    let data = "";
    e.preventDefault();

    if (password === "") {
      alert("enter valid password");
      // console.log('enter valid password')
    } else {
      let result = await signRegister();
      console.log(result)
      if (result) {
        data = {
          firstName,
          lastName,
          organisation,
          email,
          password,
          userType: "Buyer",
        };
        console.log(data);

        try {
          const response = await axios.post("/auth/register", data);
          userLogin(response.data);
          navigate("/verification");
        } catch (error) {}
      }
    }
  }

  return (
    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
      <div className="card bg-glass" style={{ right: "-150px" }}>
        <div className="card-body px-4 py-5 px-md-5">
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                    placeholder="First Name"
                    style={{ height: "50px" }}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                    placeholder="Last Name"
                    style={{ height: "50px" }}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <!-- Organization input --> */}
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form3Example6"
                placeholder="Organization"
                className="form-control"
                style={{ height: "50px" }}
                onChange={(e) => {
                  setorganisation(e.target.value);
                }}
              />
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                placeholder="Email Address"
                className="form-control"
                style={{ height: "50px" }}
                onChange={(e) => {
                  setEmail(e.target.value);
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
                style={{ height: "50px" }}
                // required
                onChange={validatePassword}
              />
            </div>
            {/* <!--Confirm Password input --> */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form3Example5"
                className="form-control"
                placeholder="Confirm Password"
                style={{ height: "50px" }}
                required
                onChange={validatePassword}
              />
            </div>
            {/* <!-- Submit button --> */}
            <div className="styler">
              <button
                type="submit"
                onClick={
                  // validatePassword;
                  (e) => {
                    handleSubmit(e);
                  }
                }
                className="btn btn-primary btn-block mb-4 button_styler"
              >
                Sign Up
              </button>
            </div>
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
                  onClick={() => navigate("/")}
                >
                  <p
                    style={{
                      marginBottom: 0,
                      color: "#ad3232",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Already A user? Login
                  </p>
                </button>
              </div>
            </div>
            {/* <!-- Register buttons --> */}
            {/* <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fa fa-facebook-f"></i>
                </button>
  
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fa fa-google"></i>
                </button>
  
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fa fa-twitter"></i>
                </button>
  
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fa fa-github"></i>
                </button>
              </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Buyerlogin;
