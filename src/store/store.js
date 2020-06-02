import rootReducer from './rootreducer.js'
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

export default function configureStore(initialState){
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk
      )
    )
  )
  return store
}
