import moment from 'moment'

const _todos = []
let _nextId = 0

const newTodo = action => {
  _nextId ++;

  return {
    'id': _nextId,
    'created_at': moment().format('MMMM Do YYYY, h:mm:ss a'),
    'value': action.value
  }
}

const removeItem = (state, action) => {
  return state.filter(item => item.id !== action.id)
}

const todos = (state = _todos, action) => {

  switch (action.type) {
    case 'CREATE':
      return [newTodo(action), ...state]
    case 'REMOVE':
      return removeItem(state, action)
    default:
      return state
  }

}

export default todos