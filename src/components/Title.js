import React from 'react'

const TextBlock = ({ title, text }) => (
  <div className='Title'>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
)

export { TextBlock }
