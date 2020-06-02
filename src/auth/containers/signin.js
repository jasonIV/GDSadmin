import React,{ useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../img/icon.png';
import Navbar from '../../components/navbar.js'
import { connect } from "react-redux"
import { signIn } from "../actions/authActions.js"

function Signin(props){

  const { auth, error, loading } = props

  const email = useRef(null)
  const password = useRef(null)
  
  const handleSignIn = (event) => {
    props.signIn(email.current.value, password.current.value)
  }
  
  const isExist = obj => {
    return Object.keys(obj).length
  }

  useEffect(() => {
    if(isExist(auth)){
      props.history.push("/dashboard")
    }
  },[auth])

  return(
    <div className="wrap">
      <div className="container">
        <div className="singin">
          <div className="title">
            <p className="text-center">
              GDS Admin App
            </p>
          </div>
            <div className="content">
              <div className="signin">
                <p className="title">Sign In</p>
                <img src={"https://i.imgur.com/Uwx156f.png"} alt="SIGNIN" />
              </div>
              <div className="form">
                <input type="text" name="" placeholder="Email" ref={email} required={true} />
                <input type="password" name="" placeholder="Password" ref={password} required={true} />
                { isExist(error) ? 
                  <div style={{color: "red"}}>
                    {error.message}
                  </div>
                  : null }
                <button className="btn-com btn-m-t" onClick={handleSignIn} >
                  {loading? <p>Loading</p> : <p>Sign In</p>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = store => {
  return{
    auth: store.auth.auth,
    loading: store.auth.loading,
    error: store.auth.error
  }
}


export default connect( mapStateToProps, { signIn } )(Signin)
