import { Auth } from "aws-amplify";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_LOADING = "LOGIN_LOADING"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_ERROR = "LOGOUT_ERROR"

export const signIn = (email, password) => {
  return(dispatch) => {
    dispatch({ type: LOGIN_LOADING })
    Auth.signIn(email, password)
    .then(user => {
      dispatch({type: LOGIN_SUCCESS, payload: user})
    })
    .catch(err => {
      console.log(err);
      dispatch({type: LOGIN_ERROR, err})
    })
  }
}

export const signOut = () => {
  return(dispatch) => {
    Auth.signOut()
    .then(res => dispatch({ type: LOGOUT_SUCCESS }))
    .catch(err => dispatch({ type: LOGOUT_ERROR }, err))
  }
}
