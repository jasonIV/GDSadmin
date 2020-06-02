import * as firebase from "firebase/app"
import "firebase/auth"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_LOADING = "LOGIN_LOADING"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_ERROR = "LOGOUT_ERROR"

export const signIn = (email, password) => {
  return(dispatch) => {
    dispatch({type: LOGIN_LOADING})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err =>
      dispatch({type: LOGIN_ERROR, payload: err})
    ) 
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          dispatch({type: LOGIN_SUCCESS, payload: user})
        }
      })
  }
}

export const signOut = () => {
  return(dispatch) => {
    firebase.auth().signOut()
    .then(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(!user){
          dispatch({type: LOGOUT_SUCCESS})
        }
      })
    }).catch(err => {
      dispatch({type: LOGOUT_ERROR, payload: err })
    })
  }
}
