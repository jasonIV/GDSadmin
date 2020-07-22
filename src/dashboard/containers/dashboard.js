import React,{ useRef, useEffect } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { IoMdListBox } from 'react-icons/io';
import { connect } from "react-redux"
import { signOut } from "../../auth/actions/authActions.js"
import { updateBalance } from "../actions/dashboardActions.js"

function Dashboard(props){
  const phoneNo = useRef(null)
  const topup = useRef(null)

  const { auth, loading, error } = props

  const isExist = obj => {
    return Object.keys(obj).length
  }
  
  const handleSignOut = (event) => {
    props.signOut()
  }

  const handleUpdate = (event) => {
    props.updateBalance(phoneNo.current.value, topup.current.value)
  }

  useEffect(() => {
    if(!isExist(auth)){
      props.history.push("/signin")
    }
  },[auth])

  return(
      <div className="wrap">
              <div className="dashboard main-content">
                <div className="title">
                  <p className="text-center">
                    GDS Admin App
                  </p>
                </div>
                  <div className="balance inn-content">
                    {/*<ul className="list">
                          <li>
                              <p>Balance  <i className="float-right"> 30000 ks</i></p>
                          </li>
                      </ul>*/}
                    <div className="form">
                      <input type="number" name="" placeholder="Phone Number" ref={phoneNo} required={true} />
                      <input type="number" name="" placeholder="Balance Amount" ref={topup} required={true} />
                    { isExist(error) ? 
                      <div style={{textAlign: "center", color: "red"}}>
                        {error.message}
                      </div>
                      : null }
                      <button className="btn-com btn-m-t" onClick={handleUpdate}>
                        {loading? <p>Loading</p> : <p>Add Balance</p>}
                      </button>
                      <button type="button" onClick={handleSignOut} className="btn-com"><TiArrowBackOutline /> Log Out</button>
                    </div>
                    {/*}<div className="app"><Link to="/partnerApp"><AiFillPlusCircle/></Link></div>*/}
                    <div className="history-list"><Link to="/history"><IoMdListBox/></Link></div>
                  </div>
              </div>
          </div>
  );
}

const mapStateToProps = store =>{
  return{
    auth: store.auth.auth,
    success: store.dashboard.success,
    loading: store.dashboard.loading,
    error: store.dashboard.error,
  }
}

export default connect(mapStateToProps, { signOut, updateBalance })(Dashboard);
