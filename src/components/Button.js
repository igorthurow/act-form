import React from 'react'

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={'Button'}>
    {children}
  </button>
)

export { Button }
