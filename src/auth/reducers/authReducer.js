import { LOGIN_SUCCESS, 
  LOGIN_LOADING, 
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR } from "../actions/authActions.js"

const initialState = {
  auth: {},
  loading: false,
  error: {},
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: null,
      }
    case LOGIN_LOADING:
      return{
        ...state,
        loading: true
      }
   case LOGIN_ERROR:
     return {
       ...state,
       auth: null,
       error: action.err,
       loading: false
     }
   case LOGOUT_SUCCESS:
      return{
        ...state,
        auth: null,
        loading: false,
        error: null,
      }
   case LOGOUT_ERROR:
      return{
        ...state,
        loading: false,
        error: action.err
      }
   default:
      return state
  }
}

