import React from "react";
import profile from "../../../assets/Login/profile.png";
import TextField from '@mui/material/TextField';
import "./Login.css";

const LoginForm = () => {
  return (
    <section className="login-section ">
      <div className="container">
        <div className="login-wrapper">
          <div className="login-card">
            <div className="login-grid">
              {/* Left Side - Form */}
              <div className="login-form">
                <div className="text-center flex flex-col items-center">
                  <img src={profile} alt="logo" className="logo " />
                  <h4 className="title text-blue-800 font-bold uppercase">
                    LogIn
                  </h4>
                </div>
                <form className="mt-5">
                  <div className="input-group">
                    
                    <TextField 
                    id="Username" 
                    label="Username"
                    placeholder="Phone number or email address" 
                    variant="outlined"
                    className="w-full" />
                  </div>
                  <div className="input-group">
                    
                  <TextField 
                    id="Password" 
                    label="Password"
                    placeholder="Password" 
                    variant="outlined"
                    className="w-full" />
                  </div>
                  <div className="button-group flex flex-col items-center">
                    <button type="button" className="login-button">
                      Log In
                    </button>
                    <a href="#" className="forgot-password text-xl">
                      Forgot password?
                    </a>
                  </div>
                  <div className="register-group ">
                    <p className="register-text">Don't have an account?</p>
                    <button type="button" className="create-button">
                      Create new
                    </button>
                  </div>
                </form>
              </div>
              {/* Right Side - Gradient */}
              <div className="login-info">
                <div>
                  <h4 className="info-title">
                    We are more than just a company
                  </h4>
                  <p className="info-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
