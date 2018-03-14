let _todos = []
let _nextId = 0

function newTodo(action) {
  _nextId ++;

  return {
    'id': _nextId,
    'value': action.value
  }
}

function removeItem(state, action) {
  return state.filter(item => {
    return item.id !== action.id
  })
}

function todos(state = _todos, action) {

  switch (action.type) {
    case 'CREATE':
      return [...state, newTodo(action)]
    case 'REMOVE':
      return removeItem(state, action)
    default:
      return state
  }

}

export default todos
