import {
  UPDATE_BALANCE_SUCCESS,
  UPDATE_BALANCE_LOADING,
  UPDATE_BALANCE_ERROR
} from "../actions/dashboardActions.js"   //importing action types

//inititalstate
const initialState = {
  loading: false,
  success: false,
  error: null
}

//reducer
export default function(state = initialState, action){
  switch(action.type){
    case UPDATE_BALANCE_SUCCESS:
      return{
        ...state,
        loading: false,
        success: true,
        error: null,
      }
   case UPDATE_BALANCE_LOADING:
      return{
        ...state,
        success: false,
        loading: true,
        error: null,
      }
   case UPDATE_BALANCE_ERROR:
      return{
        loading: false,
        success: false,
        error: action.payload
      }
   default:
      return state
  }
}

  
      
