import moment from 'moment'
import { List } from 'immutable'

import { taskModel } from './../models/index'
import { CREATE, REMOVE } from './../actions/todoListAction'

class Tasks {

  constructor () {
    this._nextId = 0
    this._tasks = new List()
  }

  create (action) {
    const task = new taskModel()

    task.id = this._nextId
    task.created_at = moment().format('MMMM Do YYYY, h:mm:ss a')
    task.value = action.value
    this._tasks.push(task)
    this._nextId ++
  }

  remove (action) {
    this._tasks = this._tasks.filter(item => item.id !== action.id)
  }

}


const tasksReducer = (state = new Tasks(), action) {
  switch (action.type) {
    case 'CREATE':
      return state.create(action)
    case 'REMOVE':
      return state.remove(action)
  }
}

export default tasksReducer
