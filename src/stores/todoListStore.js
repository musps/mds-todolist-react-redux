import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'

import todoList from './../reducers/todoListReducer'

const reducers = combineReducers({
  'todoList': todoList
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

export default store
