import React,{ useEffect } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
import HistoryItem from "./historyitem.js"
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { fetchTransactions, deleteTransaction } from "../actions/historyActions.js"

function History(props){

  const { transactions, tloading, dloading, error } = props

  function handleRollback(e,id) {
    e.preventDefault();
    e.stopPropagation();
    props.deleteTransaction(id);
    props.fetchTransactions();
  }
  
  useEffect(() => {
    props.fetchTransactions();
  },[])
  
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
                { transactions.length === 0 ? "Loading ..." :
                    transactions.map(item => {
                      if(item === transactions[0]){
                        return(
                          <HistoryItem 
                          id={item.id}
                          name={item.name}
                          phoneNo={item.phoneNo}
                          amount={item.amount}
                          updatedBalance={item.updatedBalance}
                          time={item.time} 
                          enabled={true}
                          Rollback={handleRollback}
                          />)}
                      else{
                        return(
                          <HistoryItem 
                          id={item.id}
                          name={item.name}
                          phoneNo={item.phoneNo}
                          amount={item.amount}
                          updatedBalance={item.updatedBalance}
                          time={item.time} 
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

// const transactionsStore = store => store.hist.transactions

// const transactionsSelector = createSelector([transactionsStore], items => {
//   return items.map(item => ({
//       id: item.id,
//       name: item.name,
//       phoneNo: item.phoneNo,
//       amount: item.amount,
//       updatedBalance: item.updatedBalance,
//       time: new Date(item.time._seconds * 1000)
//   }))
// })

const mapStateToProps = store => {
  return {
    transactions: store.hist.transactions,
    loading: store.hist.tloading,
    error: store.hist.error,
    dloading: store.hist.dloading,
  }
}

export default connect(mapStateToProps, { fetchTransactions, deleteTransaction })(History);
