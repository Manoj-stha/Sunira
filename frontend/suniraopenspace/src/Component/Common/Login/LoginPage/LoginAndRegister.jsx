import React, { useState, useEffect } from 'react';
import './LoginAndRegister.css';
import {
  FaUser,
  FaLock,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaEnvelope,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import signin from "../../../../assets/Login/log.svg";
import register from "../../../../assets/Login/register.svg";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const LoginAndRegister = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const signInBtn = document.querySelector('#sign-in-btn');
    const signUpBtn = document.querySelector('#sign-up-btn');

    signUpBtn?.addEventListener('click', () => {
      setIsSignUpMode(true);
    });

    signInBtn?.addEventListener('click', () => {
      setIsSignUpMode(false);
    });
  }, []);

  const handleClick = () => {
    nav('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={` ${isSignUpMode ? 'sign-up-mode' : ''} `} id='container'>
      <div className='' id='forms-container'>
        <div className='signin-signup'>
          <h2
            className='absolute text-4xl mt-[-10rem] ml-[55rem] cursor-pointer'
            onClick={handleClick}
            id='cross'
          >
            <RxCross1 />
          </h2>
          <form action='#' className='sign-in-form'>
            <h2 className='title'>Sign in</h2>
            <div className='input-field justify-center'>
              <FaUser className=' ' />
              <input type='text' placeholder='Username' />
            </div>
            <div className='input-field justify-center'>
              <FaLock className='' />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <span onClick={togglePasswordVisibility} className='cursor-pointer'>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input type='submit' value='Login' className='btn solid' />
            <p className='social-text'>Or Sign in with social platforms</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <FaFacebookF />
              </a>
              <a href='#' className='social-icon'>
                <FaTwitter />
              </a>
              <a href='#' className='social-icon'>
                <FaGoogle />
              </a>
              <a href='#' className='social-icon'>
                <FaLinkedinIn />
              </a>
            </div>
          </form>

          <form action='#' className='sign-up-form'>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <FaUser />
              <input type='text' placeholder='Username' />
            </div>
            <div className='input-field'>
              <FaEnvelope />
              <input type='email' placeholder='Email'  className=''/>
            </div>
            <div className='input-field'>
              <FaLock />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <span onClick={togglePasswordVisibility} className='cursor-pointer '>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input type='submit' value='Sign up' className='btn' />
            <p className='social-text'>Or Sign up with social platforms</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <FaFacebookF />
              </a>
              <a href='#' className='social-icon'>
                <FaTwitter />
              </a>
              <a href='#' className='social-icon'>
                <FaGoogle />
              </a>
              <a href='#' className='social-icon'>
                <FaLinkedinIn />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div id='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here?</h3>
            <p>Click here to create a new account</p>
            <button className='btn transparent' id='sign-up-btn'>
              Sign up
            </button>
          </div>
          <img src={signin} className='image' alt='Sign In' />
        </div>

        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us?</h3>
            <p>If you already have an account then click here</p>
            <button className='btn transparent' id='sign-in-btn'>
              Sign in
            </button>
          </div>
          <img src={register} className='image' alt='Sign Up' />
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegister;
