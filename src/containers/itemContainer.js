import React from 'react'
import { Link } from 'react-router-dom'

const ItemContainer = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="card cardAppItem">
      <div className="card-body">
        {item.value}
      </div>
    </Link>
  )
}

export default ItemContainer
