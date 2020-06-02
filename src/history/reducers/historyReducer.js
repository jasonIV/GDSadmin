import { 
  TRANSACTION_LOADING, 
  TRANSACTION_SUCCESS, 
  TRANSACTION_ERROR ,
  DELETE_TRANSACTION_LOADING,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_ERROR 
} from "../actions/historyActions.js"

const initialState = {
  transactions: [],
  dsuccess: false,
  dloading: false,
  tloading: false,
  error: {},
}

export default function (state=initialState, actions){
  switch(actions.type){
    case TRANSACTION_LOADING:
      return{
        ...state,
        tloading: true,
      }
    case TRANSACTION_SUCCESS:
      return {
        ...state,
        tloading: false,
        transactions: actions.payload,
        error: {}
      }
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: actions.payload,
      }
    case DELETE_TRANSACTION_LOADING:
      return{
        ...state,
        dloading: true,
      }
    case DELETE_TRANSACTION_SUCCESS:
      return{
        ...state,
        dloading: false,
        dsuccess: true,
        error: {}
      }
    case DELETE_TRANSACTION_ERROR:
      return{
        ...state,
        dloading: false,
        error: actions.payload,
      }
    default:
      return state
  }
}
