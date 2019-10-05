import React from 'react'
import { Counter } from '../'
import { onChangeCounter } from './handlers'

const NotSetView = ({ items, onChange }) => (
  <div className='NotSetView'>
    <Counter
      onChange={counterLength =>
        onChangeCounter({
          oldValue: items,
          counterLength,
          callback: onChange
        })
      }
    >
      {items.length}
    </Counter>

    {items.map((item, index) => (
      <Counter
        key={index}
        onChange={value =>
          onChangeCounter({
            oldValue: items,
            newValue: { value, index },
            callback: onChange
          })
        }
      >
        {item}
      </Counter>
    ))}
  </div>
)

export { NotSetView }
