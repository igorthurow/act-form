import React from 'react'
import { Button } from '../components'

const Counter = ({ onChange, children }) => {
  const onIncrease = () => onChange(children + 1)
  const onDecrease = () => onChange(children - 1)

  return (
    <div className='Counter'>
      <Button disabled={!children} onClick={onDecrease}>
        -
      </Button>
      {children}
      <Button onClick={onIncrease}>+</Button>
    </div>
  )
}

export { Counter }
