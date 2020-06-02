import React from "react"

function HistoryItem(props){

  return(
    <div className="detail">
        <p className="name">{props.name}</p>
        <p className="acc">{props.phoneNo}</p>
        <p className="amount">MMK - {props.amount}</p>
        <p className="time">{props.time.toDateString()}</p>
        <button 
          className="btn-com" 
          style={{width: "auto", float: "left"}}
          onClick={e => {props.Rollback(e,props.id)}}
        >
        Rollback
        </button>
    </div>
  )
}

export default HistoryItem
