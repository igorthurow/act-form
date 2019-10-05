import React from 'react'

const Item = ({ title, icon }) => (
  <div className='Item'>
    <img src={icon} />

    <div>{title}</div>
  </div>
)

export { Item }