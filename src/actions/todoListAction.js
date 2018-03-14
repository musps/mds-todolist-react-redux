export function create(value) {
  return {
    'type': 'CREATE',
    'value': value
  }
}

export function remove(id) {
  return {
    'type': 'REMOVE',
    'id': id
  }
}