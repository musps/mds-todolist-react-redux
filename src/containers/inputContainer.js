import React from 'react'
import { connect } from 'react-redux'

import { create } from './../actions/todoListAction'

const inputContainer = ({ onKeyPress }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light headerInput">
    <input 
      className="myInput"
      placeholder="To do ... ?"
      onKeyPress={onKeyPress}
    />
  </nav>
)

const onKeyPress = (e, dispatch) => {
  if (e.charCode === 13 && e.target.value !== '') {
    dispatch(create(e.target.value))
    e.target.value = ''
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onKeyPress: e => onKeyPress(e,dispatch)
})

export default connect(null, mapDispatchToProps)(inputContainer)
