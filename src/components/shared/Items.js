import React from 'react'
import { Item } from './Item'
import './Items.scss'

const Items = ({
  itemsList,
  onClick = () => null,
  activeItem = ''
}) => (
  <div className={Items.displayName}>
    {itemsList.map(({ icon, title }) => (
      <Item
        isActive={title === activeItem}
        activeItem={activeItem}
        onClick={() => onClick(title)}
        key={icon}
        icon={icon}
        title={title}
      />
    ))}
  </div>
)

Items.displayName = 'Items'

export { Items }
