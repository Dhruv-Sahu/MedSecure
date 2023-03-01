import React, { useState } from "react";
// import {useNavigate} from "react-router-dom";
// import { Link } from "react-router-dom";
import "../styles/NewLogin.css";
import "font-awesome/css/font-awesome.min.css";
import Loginform from "./Loginform";
import logo from '../assets/images/logomed.png'
const Login = () => {
  // const navigate = useNavigate();
  // const [buttons, setButtons] = useState([
  //   { id: 1, text: "Buyer", isDefault: true },
  //   { id: 2, text: "Seller", isDefault: false },
  //   { id: 3, text: "Hospital", isDefault: false },
  // ]);
  // const validatePassword = () => {
  //   var password = document.getElementById("form3Example4")
  // , confirm_password = document.getElementById("form3Example5");
  // if(password.value !== confirm_password.value) {
  //   confirm_password.setCustomValidity("Passwords Don't Match");
  // } else {
  //   confirm_password.setCustomValidity('');
  // }
  // password.onchange = validatePassword;
  // confirm_password.onkeyup = validatePassword;
  // }
// eslint-disable-next-line
{
  /* <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
      crossorigin="anonymous"
    /> */}
  // const handleClick = (id) => {
  //   setButtons(
  //     buttons.map((button) => ({
  //       ...button,
  //       isDefault: button.id === id,
  //     }))
  //   );
  // };
  return (
    <div>
      
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="row gx-lg-5 align-items-center mb-5">
            {/* <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
            <img src={logo} alt="Medsecure Logo"style={{height:"150px",width:"200px"}}/>
              <div>
                {buttons.map((button) => (
                  <button
                    key={button.id}
                    className="Buttons"
                    style={{
                      backgroundColor: button.isDefault ? "gray" : "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "1px solid black",
                      display: "block",
                    }}
                    onClick={() => handleClick(button.id)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div> */}
            <Loginform/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;