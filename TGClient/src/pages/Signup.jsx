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
        <main class="main">
          <div class="container">
            <section class="wrapper">
              <div class="heading">
                <h1 class="text text-large">Sign Up</h1>
                <p class="text text-normal">
                  Existing User?
                  <span>
                    <Link to="/login" class="text text-links">
                      Login Here!
                    </Link>
                  </span>
                </p>
              </div>
              <form name="signin" class="form">
                <div class="input-control">
                  <label for="email" class="input-label" hidden>
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="input-field"
                    placeholder="Name"
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}
                  />
                </div>

                <div class="input-control">
                  <label for="tel" class="input-label" hidden>
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    class="input-field"
                    placeholder="Contact Number"
                  />
                </div>

                <div class="input-control">
                  <label for="email" class="input-label" hidden>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="input-field"
                    placeholder="Email Address"
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div class="input-control">
                  <label for="password" class="input-label" hidden>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="input-field"
                    placeholder="Password"
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                  />
                </div>
                <div class="input-control">
                  <a href="#" class="text text-links">
                    Forgot Password
                  </a>
                  <input
                    type="submit"
                    name="submit"
                    class="input-submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <div class="striped">
                <span class="striped-line"></span>
                <span class="striped-text">Or</span>
                <span class="striped-line"></span>
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
