import axios from 'axios'
import { awsUrl } from "../../config/url";

//action types
export const UPDATE_BALANCE_SUCCESS = "UPDATE_BALANCE_SUCCESS"
export const UPDATE_BALANCE_LOADING = "UPDATE_BALANCE_LOADING"
export const UPDATE_BALANCE_ERROR = "UPDATE_BALANCE_ERROR"

//actions
export const updateBalance = (useragent,topup) => {
  return(dispatch) => {
    dispatch({type: UPDATE_BALANCE_LOADING})
    axios.put(`${awsUrl}balance/add`, {
      useragent,
      topup
    })
    .then(res => { 
      dispatch({type: UPDATE_BALANCE_SUCCESS})
      alert("Balance has been updated.")
    })
    .catch(err => dispatch({type: UPDATE_BALANCE_ERROR, payload: err}))
  }
}
