import React,{ useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import HistoryItem from "./historyitem.js"
import { connect } from "react-redux";
import { fetchTransactions, deleteTransaction } from "../actions/historyActions.js"

function History(props){

  const { transactions, tloading,  error } = props
  const [ sorted, setSorted ] = useState([]);

  useEffect(() => {
    props.fetchTransactions();
  },[])
  

  useEffect(() => {
    if(transactions.length > 0){
    console.log("sorting..")
    setSorted(transactions.sort(function(a,b){
      return a.date - b.date
    }))
  }}, [transactions])

  function handleRollback(e,date) {
    e.preventDefault();
    e.stopPropagation();
    props.deleteTransaction(date);
    props.fetchTransactions();
  }
  
  return(
    <div className="wrap">
        <div className="dashboard main-content">
            <div className="title">
                <p className="text-center">
                    <Link to="/dashboard" className="cl-white bk-btn" value="dashboard"><TiArrowBackOutline/></Link>GDS Admin App</p>
            </div>
            { isEmpty(error) ? null : <div style={{background: "#ffcccc", color: "red", margin: "10px 20px", padding: "20px",textAlign: "center"}}>Balance already used up, not enough to roll back.</div>}
            { tloading? "Loading Please Wait..." : (
              <div className="history inn-content">
                { sorted.length === 0 ? "Loading ..." :
                    sorted.slice(0,).reverse().map(item => {
                      if(item === sorted[sorted.length - 1]){
                        return(
                          <HistoryItem 
                          key={item.date}
                          name={item.username}
                          phoneNo={item.useragent}
                          amount={item.topup}
                          time={item.date} 
                          enabled={true}
                          Rollback={handleRollback}
                          />)}
                      else{
                        return(
                          <HistoryItem 
                          key={item.date}
                          name={item.username}
                          phoneNo={item.useragent}
                          amount={item.topup}
                          time={item.date} 
                          enabled={false}
                          Rollback={handleRollback}
                          />)}
                    })}
              </div>
            )}
        </div>
    </div>
  )
}

const isEmpty = obj => {
  if(Object.keys(obj).length === 0){
    return true;
  }
  return false;
}

const mapStateToProps = store => {
  return {
    transactions: store.hist.transactions,
    loading: store.hist.tloading,
    error: store.hist.error,
    dloading: store.hist.dloading,
  }
}

export default connect(mapStateToProps, { fetchTransactions, deleteTransaction })(History);
