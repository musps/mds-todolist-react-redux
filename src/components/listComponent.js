import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './../containers/itemContainer'

class List extends Component {

  render () {
    return (
      <div className="list-group">
        {this.props.store.todoList.map((item, index) => (
          <Item key={index} item={item} />
        ))}
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
  mapStateToProps
)(List)
