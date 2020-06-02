import React from 'react'
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';

function Navbar(props){
  return(
    <div className="title">
      <button onClick={props.handleSignOut} className="cl-white bk-btn"><TiArrowBackOutline /></button>
      <p className="text-center">
        GDS Admin App
      </p>
    </div>
  ) 
}

export default Navbar
