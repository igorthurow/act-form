import React from 'react'
import { Item } from './Item'

const Items = ({ itemsList }) =>
  itemsList.map(({ icon, title }) => (
    <Item key={icon} icon={icon} title={title} />
  ))

export { Items }
