import React from 'react'
import { Link } from 'react-router-dom'

import CommentContainer from './commentContainer'

const ItemContainer = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="card cardAppItem">
      <div className="card-body">
        <CommentContainer>{item.value}</CommentContainer>
      </div>
    </Link>
  )
}

export default ItemContainer
