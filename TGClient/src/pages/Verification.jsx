import React, { useState, useContext } from "react";
import "../styles/verification.css";

import { useNavigate } from "react-router-dom";
import axios from "../context/axios";
import { AuthContext } from "../context/authContext";


const Verification = () => {

  const navigate = useNavigate()
  const {userData} = useContext(AuthContext)
  console.log(userData)
  const [digit1, setDigit1] = useState("")
  const [digit2, setDigit2] = useState("")
  const [digit3, setDigit3] = useState("")
  const [digit4, setDigit4] = useState("")


    const handleInput=(e)=>{
        console.log(e.nativeEvent.data)
        if(e.nativeEvent.data===null)
        {
            let inputField = e.target;
            let prevField = inputField.previousElementSibling;
            return prevField && prevField.focus();
        }
        let inputField = e.target;
        if (inputField.value.length >= 1) {
          let nextField = inputField.nextElementSibling;
          return nextField && nextField.focus();
        }
      }
      const keychanger=(e)=>{
        let inputField = e.target;
        switch (e.keyCode) {
           case 37:
            let prevField = inputField.previousElementSibling;
            return prevField && prevField.focus();
           break;
           case 39:
            let nextField = inputField.nextElementSibling;
            return nextField && nextField.focus();
            break
        }}

        async function handleSubmit(e){
          e.preventDefault()
          let data = {
            otp : `${digit1}${digit2}${digit3}${digit4}`,
            id : userData?._id
          }
          console.log(`${digit1}${digit2}${digit3}${digit4}`)
          console.log(userData)
          try {

            const response = await axios.post('/auth/emailVerification',data)
            if (response.data){
              navigate('/')
            }
            
          } catch (error) {
            console.log(error)
          }
        }

  return (
    <div style={{height: "100%",
        display: "grid",
        placeItems: "center",
        marginBottom:"100px",marginTop:"100px"}}>
      <div
        className="container"
        style={{
          width: "400px",
          padding: "50px",
          backgroundColor: "#ffffff",
          borderRadius: "25px",
        }}
      >
        <h3
          className="title"
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#093030",
            marginBottom: "25px",
          }}
        >
          OTP Verification
        </h3>
        <p
          className="sub-title"
          style={{ color: "#B5BAB8", fontSize: "14px", marginBottom: "25px" }}
        >
          Enter the OTP you received to
          <span
            className="phone-number"
            style={{ display: "block", color: "#093030", fontWeight: "600" }}
          >
            {userData?.email}
          </span>
        </p>
        <div
          className="wrapper"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyItems: "space-between",
          }}
        >
          <input
            type="text"
            className="field 1"
            style={{
              width: "50px",
              lineHeight: "75px",
              fontSize: "32px",
              border: "none",
              backgroundColor: "#EAF5F6",
              borderRadius: "5px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#093030",
              marginBottom: "25px",
            }}
            onInput={handleInput}
            onKeyDown={keychanger}
            onChange = {(e)=>{
              setDigit1(e.target.value)
            }}
            maxLength="1"
          />
          <input
            type="text"
            className="field 2"
            style={{
              width: "50px",
              lineHeight: "75px",
              fontSize: "32px",
              border: "none",
              backgroundColor: "#EAF5F6",
              borderRadius: "5px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#093030",
              marginBottom: "25px",
            }}
            onInput={handleInput}
            onKeyDown={keychanger}
            maxLength="1"
            onChange = {(e)=>{
              setDigit2(e.target.value)
            }}
          />
          <input
            type="text"
            className="field 3"
            style={{
              width: "50px",
              lineHeight: "75px",
              fontSize: "32px",
              border: "none",
              backgroundColor: "#EAF5F6",
              borderRadius: "5px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#093030",
              marginBottom: "25px",
            }}
            onInput={handleInput}
            onKeyDown={keychanger}
            onChange = {(e)=>{
              setDigit3(e.target.value)
            }}
            maxLength="1"
          />
          <input
            type="text"
            className="field 4"
            style={{
              width: "50px",
              lineHeight: "75px",
              fontSize: "32px",
              border: "none",
              backgroundColor: "#EAF5F6",
              borderRadius: "5px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#093030",
              marginBottom: "25px",
            }}
            onInput={handleInput}
            onKeyDown={keychanger}
            onChange = {(e)=>{
              setDigit4(e.target.value)
            }}
            maxLength="1"
          />
        </div>
        <button
          className="resend"
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontWeight: "600",
            color: "#3DAFE1",
            cursor: "pointer",
          }}
        >
          Resend OTP
          <i className="fa fa-caret-right" style={{ marginLeft: "5px" }}></i>
        </button>
        <div className="styler">
              <button 
                type="submit" 
                className="btn btn-primary btn-block mb-4 button_styler"
                onClick={(e)=>{
                  handleSubmit(e)
                }}
              >
                Confirm
              </button>
              </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
      </div>
    </div>
  );
};

export default Verification;
