import React,{ useEffect } from 'react';
import {Link} from "react-router-dom";
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillPlusCircle } from 'react-icons/ai';
import HistoryItem from "./historyitem.js"
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { isEmpty } from "lodash";
import { fetchTransactions, deleteTransaction } from "../actions/historyActions.js"

function History(props){

  function handleRollback(e,id) {
    e.preventDefault();
    e.stopPropagation();
    console.log(id);
    props.deleteTransaction(id);
    props.fetchTransactions();
  }
  
  useEffect(() => {
    props.fetchTransactions();
  },[])
  
  const { transactions, tloading, dloading, error } = props

  return(
    <div className="wrap">
        <div className="dashboard main-content">
            <div className="title">
                <p className="text-center">
                    <Link to="/dashboard" className="cl-white bk-btn" value="dashboard"><TiArrowBackOutline/></Link>GDS Agent App</p>
            </div>
            { tloading? "Loading Please Wait..." : (
              <div className="history inn-content">
                { transactions.length === 0 ? "Loading ..." :
                    transactions.map(item => (
                      <HistoryItem 
                      id={item.id}
                      name={item.name}
                      phoneNo={item.phoneNo}
                      amount={item.amount}
                      updatedBalance={item.updatedBalance}
                      time={item.time} 
                      Rollback={handleRollback}
                      />
                    ))}
              </div>
            )}
        </div>
    </div>
  )
}

const transactionsStore = store => store.hist.transactions

const transactionsSelector = createSelector([transactionsStore], items => {
  return items.map(item => ({
      id: item.id,
      name: item.name,
      phoneNo: item.phoneNo,
      amount: item.amount,
      updatedBalance: item.updatedBalance,
      time: new Date(item.time._seconds * 1000)
  }))
})

const mapStateToProps = store => {
  return {
    transactions: transactionsSelector(store),
    loading: store.hist.tloading,
    error: store.hist.error,
    dloading: store.hist.dloading,
  }
}

export default connect(mapStateToProps, { fetchTransactions, deleteTransaction })(History);
