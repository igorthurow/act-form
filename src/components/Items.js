import React from 'react'
import { Item } from './Item'
import './Items.scss'

const Items = ({ itemsList }) => (
  <div className={Items.displayName}>
    {itemsList.map(({ icon, title }) => (
      <Item key={icon} icon={icon} title={title} />
    ))}
  </div>
)

Items.displayName = 'Items'

export { Items }
