import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './itemComponent'

class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="myList">
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
