import google from "../assets/images/google.png";
import { Link } from "react-router-dom";
// import akshayLok from "../../assets/img/AkshayLok.png";

import { useState, useContext } from "react";

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <div className="login">
        <div className="img">
          {/* <img src={google} alt="logo" /> */}
          <h3>
          <span className="h3Span" >Distributing Energy</span>
          <span>Empowering People</span>
        </h3>
        </div>
        <main className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large">Sign Up</h1>
                <p className="text text-normal">
                  Existing User?
                  <span>
                    <Link to="/login" className="text text-links">
                      Login Here!
                    </Link>
                  </span>
                </p>
              </div>
              <form name="signin" className="form">
                <div className="input-control">
                  <label for="email" className="input-label" hidden>
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-field"
                    placeholder="Name"
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}
                  />
                </div>

                <div className="input-control">
                  <label for="tel" className="input-label" hidden>
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="input-field"
                    placeholder="Contact Number"
                  />
                </div>

                <div className="input-control">
                  <label for="email" className="input-label" hidden>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-field"
                    placeholder="Email Address"
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="input-control">
                  <label for="password" className="input-label" hidden>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input-field"
                    placeholder="Password"
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                  />
                </div>
                <div className="input-control">
                  <a href="#" className="text text-links">
                    Forgot Password
                  </a>
                  <input
                    type="submit"
                    name="submit"
                    className="input-submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <div className="striped">
                <span className="striped-line"></span>
                <span className="striped-text">Or</span>
                <span className="striped-line"></span>
              </div>

              <div className="button">
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
