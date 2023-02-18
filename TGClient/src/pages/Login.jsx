import React, { useState } from 'react'
import "../styles/login.css";
import 'font-awesome/css/font-awesome.min.css';
import log from "../assets/images/log.svg"
import reg from "../assets/images/reg.svg"
{ <script src="https://kit.fontawesome.com/64d58efce2.js"
  crossorigin="anonymous"></script>}

// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const con = document.querySelector(".con");


// sign_up_btn.addEventListener("click", () => {
//   con.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//     con.classList.remove("sign-up-mode");
  // });
  // { <script src="app.js"></script> }


function Login() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(true);
  };
  return (
    <div className="login">
    <div className="con">
      <div className="forms-con">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-con">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className={isActive ? 'btn transparent sign-up-mode' : 'btn transparent'} onClick={handleClick} id="sign-up-btn">
            {/* className={isActive ? 'btn transparent bg-salmon' : 'btn transparent'} onClick={handleClick} */}
              Sign up
            </button>
          </div>
          <img src= "log" className="image" alt="" />
          <img src={log} className= "image "alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="reg" className="image" alt="" />
          <img src={reg} className= "image "alt="" />
        </div>
      </div>
    </div>

    </div>
  )
}

export default Login