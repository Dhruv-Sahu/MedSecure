import React, { useState } from "react";
import "../styles/NewLogin.css";
import Userlogin from "./Sellerlogin";
import Buyerlogin from "./Buyerlogin";
// import Hospitallogin from './Hospitallogin'
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../components/Header/header.css";
import "font-awesome/css/font-awesome.min.css";

const Signup = () => {
  const [current,Setcurrent]=useState(1);
  // const navigate = useNavigate();
  // const [buttons, setButtons] = useState([
  //   { id: 1, text: "Buyer", isDefault: true },
  //   { id: 2, text: "User", isDefault: false },
  //   // { id: 3, text: "Hospital", isDefault: false },
  // ]);

  // const handleClick = (id) => {
  //   setButtons(
  //     buttons.map((button) => ({
  //       ...button,
  //       isDefault: button.id === id,
  //     }))
  //   );
  // };
  const func1=()=>{
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
Setcurrent(1);
button1.classList.add("master");
button2.classList.remove("master");
button1.style.border = "1px solid black";
button2.style.border = "None";
}
const func2=()=>{
Setcurrent(2);
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
button2.classList.add("master");
button1.classList.remove("master");
button2.style.border = "1px solid black";
button1.style.border = "None";
  }
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <div style={{ fontSize: "50px" }}>
                How do you want to use MedSecure?
              </div>
              <div>
                <button
                  className="Buttons master"
                  id="button1"
                  onClick={func1}
                  style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "1px solid black",
                  // border: "None",
                  display: "block"}}
                >
                  <span style={{display:"block",fontWeight:"bold"}}>Buyer</span>
                  I am here to buy NFTs
                </button>
                <button
                  style={{padding: "10px 20px",
                  borderRadius: "5px",
                  // border: "None",
                  display: "block"}}
                  id="button2"
                  className="Buttons"
                  onClick={func2}
                >
                  <span style={{display:"block",fontWeight:"bold"}}>User</span>
                  I am here as a User
                </button>
                

                {/* {buttons.map((button) => (
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
                    {button.text+(button.id===1 &&"")}
                    
                  </button>
                ))} */}
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
            </div>
            {current===1 && <Buyerlogin />}
            {current===2 && <Userlogin />}
            {/* {buttons[2].isDefault && <Hospitallogin/>} */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
