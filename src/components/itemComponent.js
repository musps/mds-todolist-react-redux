import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import * as todoListAction from './../actions/todoListAction'

class Item extends Component {

  state = {
    item: {
      id: null,
      created_at: null,
      value: null
    }
  }

  constructor (props) {
    super(props)
    this.checkAndRender = this.checkAndRender.bind(this)
    this.btnCancel = this.btnCancel.bind(this)
    this.btnRemove = this.btnRemove.bind(this)
    this.btnEdit = this.btnEdit.bind(this)
  }

  componentWillMount () {
    // ---> Au chargement du component.
    this.checkAndRender(this.props.match.params.id)
  }

  componentWillReceiveProps (newProps) {
    // ---> A l'update du component.
    this.checkAndRender(newProps.match.params.id)
  }

  checkAndRender (id) {
    const item = _.find(this.props.item.todoList, item => item.id === parseInt(id, 10))

    if (typeof item === 'undefined') {
      this.props.history.push('/')
    } else {
      this.setState({
        item: item
      })
    }
  }

  btnCancel () {
    this.props.history.push('/')
  }
  btnRemove () {
    this.props.remove(this.state.item.id)
    this.btnCancel()
  }
  btnEdit () {
    // --> Not yet.
  }

  render () {
    let { item } = this.state
    return (
      <div className="itemComponent">
        <header>
          {item.created_at}
        </header>
        <div className="content">
          <p>{item.value}</p>
        </div>
        <footer>
          <button onClick={this.btnCancel}
            type="button" className="btn btn-warning">Cancel</button>
          <button onClick={this.btnRemove}
            type="button" className="btn btn-danger">Remove</button>
          <button onClick={this.btnEdit}
            type="button" className="btn btn-info">Edit</button>
        </footer>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { 
    'item': state
  }
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(todoListAction, dispatch)
)(Item)
