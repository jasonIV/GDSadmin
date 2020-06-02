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
        loading: false
      }
    case LOGIN_LOADING:
      return{
        ...state,
        loading: true
      }
   case LOGIN_ERROR:
     return {
       ...state,
       error: action.payload,
       loading: false
     }
   case LOGOUT_SUCCESS:
      return{
        ...state,
        auth: {},
        loading: false,
        error: {}
      }
   case LOGOUT_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
   default:
      return state
  }
}

