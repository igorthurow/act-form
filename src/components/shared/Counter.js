import React from 'react'
import { Button } from '../index'
import './Counter.scss'

const Counter = ({ onChange, children }) => {
  const onIncrease = () => onChange(children + 1)
  const onDecrease = () => onChange(children - 1)

  return (
    <div className='Counter'>
      <Button disabled={!children} onClick={onDecrease}>
        -
      </Button>
      <span>{children}</span>
      <Button onClick={onIncrease}>+</Button>
    </div>
  )
}

export { Counter }
