import React,{ useRef, useEffect } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoMdListBox } from 'react-icons/io';
import { connect } from "react-redux"
import { signOut } from "../../auth/actions/authActions.js"
import { updateBalance } from "../actions/dashboardActions.js"

function Dashboard(props){
  const phoneNo = useRef(null)
  const gds_balance = useRef(null)

  const { auth, success, loading, error } = props

  const handleSignOut = (event) => {
    props.signOut()
  }

  const handleUpdate = (event) => {
    props.updateBalance(phoneNo.current.value, gds_balance.current.value)
  }

  useEffect(() => {
    if(auth === null){
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
                    <div className="form">
                      <input type="string" name="" placeholder="Phone Number" ref={phoneNo} required={true} />
                      <input type="number" name="" placeholder="Balance Amount" ref={gds_balance} required={true} />
                    { error && 
                      <div style={{textAlign: "center", color: "red"}}>
                        {error.message}
                      </div>
                    }
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
