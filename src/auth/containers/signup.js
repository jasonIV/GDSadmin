import React,{ useRef } from 'react';
import { Link } from 'react-router-dom';
import icon from '../img/icon.png';
import Navbar from './navbar.js'

var firebase = require("firebase/app")
var fireauth = require("firebase/auth")

function Signup(props){
  const email = useRef(null)
  const password = useRef(null)

  const handleSignup = (event) => {
    event.preventDefault();
    fireauth.auth().createUserWithEmailAndPassword(email.current.value, password.currend.value)
    .then(fireauth.auth().onAuthStateChanged(user => {
      user ? console.log(user + "logged in") : console.log("Not logged in")}))
    .catch(error => console.log(error))
  }

  return(
    <div className="wrap">
      <div className="container">
        <div className="singin">
          <Navbar backarrow={false} />
            <div className="content">
              <div className="signin">
                <p className="title">Sign Up</p>
                <img src={icon} alt="SIGNIN" />
              </div>
              <div className="form">
                <input type="text" name="" placeholder="Email" ref={email} required={true} />
                <input type="password" name="" placeholder="Password" ref={password} required={true} />
                <button className="btn-com btn-m-t" onClick={handleSignup} >Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Signup;
