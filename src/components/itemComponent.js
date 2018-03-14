import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoListAction from './../actions/todoListAction'
import { Link } from 'react-router-dom'

class Item extends Component {

  constructor(props) {
    super(props)

    this.removeItem = this.removeItem.bind(this)
  }

  removeItem() {
    this.props.remove(this.props.item.id)
  }

  render() {
    return (
      <div className='myItem'>

        <Link to={`/item/${this.props.item.id}`}>show alone</Link> - 
        <button
          onClick={this.removeItem}>
          Remove item {this.props.item.id}
        </button> - 
        {this.props.item.value}
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