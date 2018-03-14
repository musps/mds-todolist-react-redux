import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoListAction from './../actions/todoListAction'

class Input extends Component {

  state = {
    'inputValue': ''
  }

  constructor(props) {
    super(props)

    // --> On set me context.
    this.onValueChange = this.onValueChange.bind(this)
    this.onValuePress = this.onValuePress.bind(this)
    this.removeValue = this.removeValue.bind(this)
  }

  onValueChange(event) {
    this.setState({
      'inputValue': event.target.value
    })
  }

  removeValue() {
    this.setState({
      'inputValue': ''
    })
  }

  onValuePress(event) {
    if (event.charCode === 13) {
      const value = this.state.inputValue
      if (value !== '') {
        this.props.create(value)
        this.removeValue()
      }
    }
  }

  render() {
    return (
      <input
        className="myInput"
        name="myNextTodo" 
        value={this.state.inputValue} 
        onChange={this.onValueChange}
        onKeyPress={this.onValuePress}
      />
    )
  }

}

const mapStateToProps = state => {
  return { 
    'store': state 
  }
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(todoListAction, dispatch)
)(Input)
