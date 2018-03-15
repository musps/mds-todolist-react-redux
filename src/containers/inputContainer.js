import React from 'react'
import { connect } from 'react-redux'

import { create } from './../actions/todoListAction'

const inputContainer = ({ dispatch }) => {
  const onKeyPress = e => {
    if (e.charCode === 13 && e.target.value !== '') {
      dispatch(create(e.target.value))
      e.target.value = ''
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light headerInput">
      <input 
        className="myInput"
        placeholder="To do ... ?"
        onKeyPress={onKeyPress}
      />
    </nav>
  )
}

export default connect()(inputContainer)
