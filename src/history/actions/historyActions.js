import axios from "axios"; 
import {awsUrl} from "../../config/url.js";

//action types
export const TRANSACTION_LOADING = "TRANSACTION_LOADING";
export const TRANSACTION_SUCCESS = "TRANSACTION_SUCCESS";
export const TRANSACTION_ERROR = "TRANSACTION_ERROR";
export const DELETE_TRANSACTION_LOADING = "DELETE_TRANSACTION_LOADING";
export const DELETE_TRANSACTION_SUCCESS = "DELETE_TRANSACTION_SUCCESS";
export const DELETE_TRANSACTION_ERROR = "DELETE_TRANSACTION_ERROR";

//actions
export const fetchTransactions = () => {
  return(dispatch) => {
    dispatch({type: TRANSACTION_LOADING})
    axios.get(`${awsUrl}balance/scan`)
      .then(res => {
        dispatch({type: TRANSACTION_SUCCESS, payload: res.data.body.Items})
      })
      .catch(err => {
        dispatch({type: TRANSACTION_ERROR, payload: err})
      })
}}

export const deleteTransaction = (date) => {
  return(dispatch) => {
    dispatch({type: DELETE_TRANSACTION_LOADING}) 
    axios.put(`${awsUrl}balance/rollback`,{
      date
    })
    .then(res => {
      dispatch({type: DELETE_TRANSACTION_SUCCESS})
      alert("Rolled back successfully.")
      window.location.replace("#/dashboard")
    })
    .catch(err => {
      dispatch({type: DELETE_TRANSACTION_ERROR, payload: err})
    })
  }
}
