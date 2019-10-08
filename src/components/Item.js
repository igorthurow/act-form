import React from 'react'
import './Item.scss'

const Item = ({ title, icon }) => (
  <div className={Item.displayName}>
    <img src={icon} />

    <div>{title}</div>
  </div>
)

Item.displayName = 'Item'

export { Item }
