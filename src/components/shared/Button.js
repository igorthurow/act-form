import React from 'react'
import './Button.scss'

const Button = ({
  onClick,
  children,
  isActive = false
}) => (
  <button
    onClick={onClick}
    className={`${Button.displayName} ${
      isActive ? 'active' : ''
    }`}
  >
    {children}
  </button>
)

Button.displayName = 'Button'

export { Button }
