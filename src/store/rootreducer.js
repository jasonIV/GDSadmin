import { combineReducers } from "redux"
import auth from "../auth/reducers/authReducer.js"
import dashboard from "../dashboard/reducers/dashboardReducer.js"
import hist from "../history/reducers/historyReducer.js"

export default combineReducers({
  auth: auth,
  dashboard: dashboard,
  hist: hist,
})
