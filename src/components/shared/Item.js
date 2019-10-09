import React from 'react'
import './Item.scss'

const Item = ({ title, icon, onClick, isActive }) => (
  <div
    onClick={onClick}
    className={`${Item.displayName} ${
      isActive ? 'actived' : ''
    }`}
  >
    <img src={icon} />

    <div>{title}</div>
  </div>
)

Item.displayName = 'Item'

export { Item }
