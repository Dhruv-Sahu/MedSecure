import React from "react";
import "../styles/verification.css";
const Verification = () => {
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
            +20 102 2233 444
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
              <button type="submit" className="btn btn-primary btn-block mb-4 button_styler">
                Sign Up
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
