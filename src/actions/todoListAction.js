export const create = value => {
  return {
    'type': 'CREATE',
    value
  }
}

export const remove = id => {
  return {
    'type': 'REMOVE',
    id
  }
}
