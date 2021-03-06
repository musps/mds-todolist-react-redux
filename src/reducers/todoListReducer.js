import moment from 'moment'
import { List } from 'immutable'

import { taskModel } from './../models/index'
import { CREATE, REMOVE } from './../actions/todoListAction'

const _todos = new List
let _nextId = 0

const newTodo = action => {
  const task = new taskModel;

  task.id = _nextId
  task.created_at = moment().format('MMMM Do YYYY, h:mm:ss a')
  task.value = action.value
  _nextId ++;
  return task
}

const removeItem = (state, action) => {
  return state.filter(item => item.id !== action.id)
}

const todos = (state = _todos, action) => {

  switch (action.type) {
    case 'CREATE':
      return state.push(newTodo(action))
    case 'REMOVE':
      return removeItem(state, action)
    default:
      return state
  }

}

export default todos
