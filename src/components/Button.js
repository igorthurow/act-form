import React from 'react'
import './Button.scss'

const Button = ({
  onClick,
  children,
  isBigLayout = false
}) => (
  <button
    onClick={onClick}
    className={`${Button.displayName}${
      isBigLayout ? 'big' : ''
    }`}
  >
    {children}
  </button>
)

Button.displayName = 'Button'

export { Button }
