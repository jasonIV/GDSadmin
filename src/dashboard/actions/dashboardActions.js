import axios from 'axios'

const baseApiUrl = "https://us-central1-gdsprototypeapi-1968a.cloudfunctions.net/app/api/"

//action types
export const UPDATE_BALANCE_SUCCESS = "UPDATE_BALANCE_SUCCESS"
export const UPDATE_BALANCE_LOADING = "UPDATE_BALANCE_LOADING"
export const UPDATE_BALANCE_ERROR = "UPDATE_BALANCE_ERROR"

//actions
export const updateBalance = (phoneNo,gds_balance) => {
  return(dispatch) => {
    dispatch({type: UPDATE_BALANCE_LOADING})
    axios.put(`${baseApiUrl}balance/add/${phoneNo}`, {
      gds_balance
    })
    .then(res => { 
      dispatch({type: UPDATE_BALANCE_SUCCESS})
      alert("Balance has been updated.")
    })
    .catch(err => dispatch({type: UPDATE_BALANCE_ERROR, payload: err}))
  }
}
