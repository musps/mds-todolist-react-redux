import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as todoListAction from './../actions/todoListAction'


class Item extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="myItem">
        <Link to='/'>home page</Link> - 
        my item
      </div>
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
)(Item)